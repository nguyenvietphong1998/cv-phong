import type { Experience } from '../types/cv'
import { SectionTitle } from './SectionTitle'

interface ExperienceTimelineProps {
  experiences: Experience[]
}

/** Kinh nghiệm làm việc hiển thị theo timeline: đường dọc bên trái + chấm mốc */
export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => (
  <section className="mb-10">
    <SectionTitle icon="experience">Kinh nghiệm</SectionTitle>
    <ol className="relative space-y-8 border-l-2 border-slate-200 pl-6 dark:border-slate-700">
      {experiences.map((exp) => (
        <li key={`${exp.company}-${exp.period}`} className="avoid-break relative">
          {/* Chấm mốc trên đường timeline */}
          <span
            aria-hidden="true"
            className="print-exact absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-sky-100 dark:ring-sky-900/60"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-base font-bold">{exp.position}</h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{exp.period}</span>
          </div>
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{exp.company}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {exp.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="print-exact rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </section>
)
