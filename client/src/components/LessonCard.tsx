import { Lesson } from "@/lib/lessonsData";
import { Clock, BookOpen } from "lucide-react";

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

export default function LessonCard({ lesson, index }: LessonCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col gap-6 mb-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 min-h-64 lg:min-h-80 rounded-lg overflow-hidden shadow-md">
        <img
          src={lesson.heroImage}
          alt={lesson.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-start">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-3">
            Session {lesson.sessionNumber}
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-2">
            {lesson.title}
          </h2>
          <p className="text-lg text-slate-600 mb-4">{lesson.subtitle}</p>
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-6 mb-6 text-slate-600">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-sage-600" />
            <span className="font-medium">{lesson.duration} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-sage-600" />
            <span className="font-medium">{lesson.sections.length} sections</span>
          </div>
        </div>

        {/* Goal */}
        <div className="mb-6 p-4 border-l-4 border-sage-500 bg-sage-50 rounded-r">
          <p className="text-sm font-semibold text-sage-900 mb-1">Goal</p>
          <p className="text-sm text-slate-700">{lesson.goal}</p>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-charcoal mb-2">
            Recommended Settings
          </p>
          <div className="flex flex-wrap gap-2">
            {lesson.settings.map((setting, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
              >
                {setting}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Link */}
        <a
          href={`#${lesson.id}`}
          className="inline-block px-6 py-2 bg-sage-600 text-white rounded hover:bg-sage-700 transition-colors font-medium text-sm w-fit"
        >
          View Full Lesson
        </a>
      </div>
    </div>
  );
}
