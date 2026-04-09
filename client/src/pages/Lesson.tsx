import { useParams, useLocation } from "wouter";
import { lessonsData } from "../lib/lessonsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";

export default function Lesson() {
  // Use sessionId to match your App.tsx routing
  const { sessionId } = useParams();
  const [, setLocation] = useLocation();
  
  // Find the lesson using the sessionId from the URL
  const lesson = lessonsData.find((l) => String(l.id) === String(sessionId));
  const facilitatorScript = lesson?.facilitatorScript?.trim();

  if (!lesson) return <div className="p-20 text-center">Lesson not found</div>;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <Button variant="outline" onClick={() => setLocation("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
        </Button>

        <header>
          <div className="text-blue-600 font-bold uppercase tracking-tight">
            Session {lesson.sessionNumber}
          </div>
          <h1 className="text-5xl font-black text-slate-900 mt-2">{lesson.title}</h1>
          <p className="text-2xl text-slate-500 mt-4 italic">{lesson.subtitle}</p>
        </header>

        {facilitatorScript && (
          <section className="border-t pt-10">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-800 mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" /> Facilitator Script
            </h2>
            <div className="bg-slate-50 p-8 rounded-2xl border prose prose-slate max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-wrap text-slate-800">
                {facilitatorScript}
              </div>
            </div>
          </section>
        )}

        <section className="prose max-w-none border-t pt-10">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-800 mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" /> Full Lecture Content
          </h2>
          <div className="space-y-8">
            {lesson.sections && lesson.sections.length > 0 
              ? lesson.sections.map((section, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{section.title}</h3>
                    <div className="text-xl leading-relaxed text-slate-700 whitespace-pre-wrap">
                      {section.content}
                    </div>
                  </div>
                ))
              : <div className="bg-slate-50 p-8 rounded-2xl border text-xl text-slate-700">No lecture content available.</div>
            }
          </div>
        </section>

        <section className="border-t pt-10 pb-20">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-800 mb-6">
            <GraduationCap className="h-8 w-8 text-blue-600" /> Participant Handout
          </h2>
          <ul className="grid gap-4">
            {lesson.handout.map((item, i) => (
              <li key={i} className="bg-white border p-4 rounded-lg shadow-sm text-lg font-medium text-slate-600">
                • {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
