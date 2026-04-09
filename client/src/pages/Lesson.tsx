import { useParams, useLocation } from "wouter";
import { lessonsData } from "../lib/lessonsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, GraduationCap } from "lucide-react";

export default function LessonPage() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const lesson = lessonsData.find((l) => String(l.id) === String(id));

  if (!lesson) return <div className="p-20 text-center text-slate-500">Lesson not found. Check your lessonsData.ts IDs.</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/")}
          className="hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
        </Button>

        <header className="space-y-4">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Session {lesson.sessionNumber}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            {lesson.title}
          </h1>
          <p className="text-xl text-slate-600 italic border-l-4 border-blue-500 pl-4">
            {lesson.subtitle}
          </p>
        </header>

        <div className="grid gap-8">
          {/* LECTURE CONTENT SECTION */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800 mb-6 border-b pb-2">
              <BookOpen className="h-6 w-6 text-blue-500" /> Full Lecture Content
            </h2>
            <div className="text-lg leading-relaxed text-slate-700 whitespace-pre-wrap">
              {lesson.sections[0].content}
            </div>
          </section>

          {/* Participant Handout */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800">
              <GraduationCap className="h-6 w-6 text-blue-500" /> Handout & Exercises
            </h2>
            <Card className="bg-slate-100 border-none shadow-none">
              <CardContent className="pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {lesson.handout.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Facilitator Notes */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800">
              <Users className="h-6 w-6 text-blue-500" /> Facilitator Notes
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {lesson.facilitatorAdaptations.map((note, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="pt-4">
                    <div className="font-bold text-xs uppercase text-blue-600 mb-2">{note.setting}</div>
                    <p className="text-sm text-slate-600 leading-snug">{note.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
