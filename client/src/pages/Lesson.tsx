import LessonDetail from "@/components/LessonDetail";
import LessonIndex from "@/components/LessonIndex";
import { lessonsData } from "@/lib/lessonsData";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";

export default function Lesson() {
  const [match, params] = useRoute("/:sessionId");
  
  // Find the current lesson based on the URL parameter
  const lesson = lessonsData.find(l => l.id === params?.sessionId);

  // Scroll to top when the lesson changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.sessionId]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Lesson Not Found</h1>
          <Link to="/" className="text-sage-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={32} className="text-sage-600" />
              <Link to="/">
                <h1 className="text-2xl font-bold text-charcoal cursor-pointer hover:text-sage-700 transition-colors">
                  Lesson Collection
                </h1>
              </Link>
            </div>
            <Link to="/" className="text-slate-600 hover:text-sage-600 flex items-center gap-2 transition-colors font-medium">
              <ArrowLeft size={20} />
              Back to Overview
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation - Hidden on mobile, sticky on desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <LessonIndex lessons={lessonsData} />
            </div>
          </div>

          {/* Lesson Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 lg:p-12">
              <LessonDetail lesson={lesson} />
              
              {/* Navigation between lessons */}
              <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-4">
                {lessonsData.indexOf(lesson) > 0 && (
                  <Link 
                    to={`/${lessonsData[lessonsData.indexOf(lesson) - 1].id}`}
                    className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left group"
                  >
                    <ArrowLeft size={20} className="text-slate-400 group-hover:text-sage-600" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Previous</div>
                      <div className="text-charcoal font-semibold">{lessonsData[lessonsData.indexOf(lesson) - 1].title}</div>
                    </div>
                  </Link>
                )}
                
                {lessonsData.indexOf(lesson) < lessonsData.length - 1 && (
                  <Link 
                    to={`/${lessonsData[lessonsData.indexOf(lesson) + 1].id}`}
                    className="flex items-center justify-end gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-right group ml-auto"
                  >
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Next</div>
                      <div className="text-charcoal font-semibold">{lessonsData[lessonsData.indexOf(lesson) + 1].title}</div>
                    </div>
                    <ArrowLeft size={20} className="rotate-180 text-slate-400 group-hover:text-sage-600" />
                  </Link>
                )}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-center">
              <p className="text-slate-500 text-sm">
                © 2026 Lesson Collection. Trauma-informed psychoeducation curriculum.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
