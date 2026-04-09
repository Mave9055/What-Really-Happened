import { Lesson } from "@/lib/lessonsData";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface LessonDetailProps {
  lesson: Lesson;
}

export default function LessonDetail({ lesson }: LessonDetailProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set([0])
  );

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div id={lesson.id} className="mb-20 scroll-mt-20">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
          Session {lesson.sessionNumber}
        </div>
        <h1 className="text-4xl font-bold text-charcoal mb-3">
          {lesson.title}
        </h1>
        <p className="text-xl text-slate-600 mb-6">{lesson.subtitle}</p>
        <p className="text-lg text-charcoal leading-relaxed">{lesson.goal}</p>
      </div>

      {/* Facilitator Adaptations */}
      {lesson.facilitatorAdaptations.length > 0 && (
        <div className="mb-12 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-charcoal mb-4">
            Facilitator Adaptation Notes
          </h2>
          <div className="space-y-4">
            {lesson.facilitatorAdaptations.map((adaptation, idx) => (
              <div key={idx} className="border-l-4 border-sage-500 pl-4">
                <p className="font-semibold text-charcoal mb-1">
                  {adaptation.setting}
                </p>
                <p className="text-slate-700 text-sm">{adaptation.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">
          Lesson Sections
        </h2>
        <div className="space-y-3">
          {lesson.sections.map((section, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                    <span className="text-sage-700 font-semibold text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      {section.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {section.duration} minutes
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-slate-600 transition-transform ${
                    expandedSections.has(idx) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.has(idx) && (
                <div className="px-4 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Handout */}
      {lesson.handout.length > 0 && (
        <div className="mb-12 p-6 bg-sage-50 rounded-lg border-l-4 border-sage-500">
          <h2 className="text-xl font-bold text-charcoal mb-4">
            Participant Handout
          </h2>
          <ul className="space-y-2">
            {lesson.handout.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <span className="text-sage-600 font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
