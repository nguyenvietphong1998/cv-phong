import type { Education } from '../types/cv'
import { SectionTitle } from './SectionTitle'

interface EducationListProps {
  educations: Education[]
}

/** Danh sách học vấn */
export const EducationList = ({ educations }: EducationListProps) => (
  <section className="mb-10">
    <SectionTitle icon="education">Học vấn</SectionTitle>
    <ul className="space-y-5">
      {educations.map((edu) => (
        <li key={`${edu.school}-${edu.period}`} className="avoid-break">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-base font-bold">{edu.school}</h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{edu.period}</span>
          </div>
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{edu.degree}</p>
          {edu.note && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.note}</p>}
        </li>
      ))}
    </ul>
  </section>
)
