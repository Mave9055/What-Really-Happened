import { useParams, useLocation } from "wouter";
import { lessonsData } from "../lib/lessonsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, GraduationCap } from "lucide-react";

export default function LessonPage() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const lesson = lessonsData.find((l) => l.id === id || l.id === Number(id));

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
        </Button>

        <header className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground">Session {lesson.sessionNumber}</div>
          <h1 className="text-4xl font-bold tracking-tight">{lesson.title}</h1>
          <p className="text-xl text-muted-foreground italic">{lesson.subtitle}</p>
        </header>

        <div className="grid gap-8">
          {/* Main Lecture Content */}
          <section className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2 text-2xl font-semibold border-b pb-2">
              <BookOpen className="h-6 w-6 text-primary" /> Full Lecture Content
            </h2>
            <div className="mt-4 text-lg leading-relaxed whitespace-pre-wrap bg-slate-50 p-6 rounded-lg border">
              {lesson.sections[0].content}
            </div>
          </section>

          {/* Handouts/Exercises Section */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold border-b pb-2">
              <GraduationCap className="h-6 w-6 text-primary" /> Participant Handout & Exercises
            </h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  {lesson.handout.map((item, i) => (
                    <li key={i} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Facilitator Notes Section */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold border-b pb-2">
              <Users className="h-6 w-6 text-primary" /> Facilitator Adaptation Notes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {lesson.facilitatorAdaptations.map((note, i) => (
                <Card key={i} className="bg-muted/50">
                  <CardContent className="pt-4">
                    <div className="font-bold text-sm uppercase tracking-wider text-primary mb-1">{note.setting}</div>
                    <p className="text-sm">{note.note}</p>
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
