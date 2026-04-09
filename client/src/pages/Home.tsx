import LessonCard from "@/components/LessonCard";
import LessonDetail from "@/components/LessonDetail";
import LessonIndex from "@/components/LessonIndex";
import { lessonsData } from "@/lib/lessonsData";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} className="text-sage-600" />
            <h1 className="text-3xl font-bold text-charcoal">
              Lesson Collection
            </h1>
          </div>
          <p className="text-slate-600">
            Trauma-informed psychoeducation curriculum for recovery and healing
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <LessonIndex lessons={lessonsData} />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <section className="mb-16">
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/hero-main-baXdwLJooTu5wKug6Exhe8.webp"
                  alt="Lesson Collection Hero"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="bg-sage-50 rounded-lg p-8 border-l-4 border-sage-500">
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  Understanding Survival Mechanisms
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This curriculum uses a single documented life to teach the
                  mechanisms of trauma, nervous system wiring, and survival
                  adaptations. Through psychoeducation, we study how early
                  experiences create templates that echo throughout life —
                  without requiring personal disclosure or re-traumatization.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each session is designed for diverse settings: NA/AA rooms,
                  jails, residential rehabs, and VA peer groups. The content
                  remains consistent; the framing adapts to the context.
                </p>
              </div>
            </section>

            {/* Lesson Overview Cards */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                Lessons Overview
              </h2>
              <div className="space-y-12">
                {lessonsData.map((lesson, idx) => (
                  <LessonCard key={lesson.id} lesson={lesson} index={idx} />
                ))}
              </div>
            </section>

            {/* Full Lesson Details */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                Full Lesson Details
              </h2>
              <div className="space-y-16">
                {lessonsData.map((lesson) => (
                  <LessonDetail key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 pt-12 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                © 2026 Lesson Collection. All rights reserved. This curriculum
                is designed for facilitators and peer educators in recovery and
                therapeutic settings.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
