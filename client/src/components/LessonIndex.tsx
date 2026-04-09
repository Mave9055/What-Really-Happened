import { Lesson } from "@/lib/lessonsData";
import { BookOpen } from "lucide-react";

interface LessonIndexProps {
  lessons: Lesson[];
}

export default function LessonIndex({ lessons }: LessonIndexProps) {
  return (
    <nav className="sticky top-20 bg-white rounded-lg shadow-sm p-6 max-h-96 overflow-y-auto border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={20} className="text-sage-600" />
        <h3 className="font-bold text-charcoal">Lessons</h3>
      </div>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <a
              href={`#${lesson.id}`}
              className="block px-3 py-2 rounded text-sm text-slate-700 hover:bg-sage-50 hover:text-sage-700 transition-colors font-medium"
            >
              Session {lesson.sessionNumber}: {lesson.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
