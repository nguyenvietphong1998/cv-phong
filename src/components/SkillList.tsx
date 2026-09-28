import type { Skill } from '../types/cv'
import { SectionTitle } from './SectionTitle'

interface SkillListProps {
  skills: Skill[]
}

/** Nhóm kỹ năng theo trường `group`, giữ nguyên thứ tự xuất hiện trong dữ liệu */
const groupSkills = (skills: Skill[]): Array<{ group: string; items: Skill[] }> =>
  skills.reduce<Array<{ group: string; items: Skill[] }>>((acc, skill) => {
    const existing = acc.find((entry) => entry.group === skill.group)
    if (existing) {
      existing.items.push(skill)
    } else {
      acc.push({ group: skill.group, items: [skill] })
    }
    return acc
  }, [])

/** Danh sách kỹ năng kèm thanh mức độ (0–100) */
export const SkillList = ({ skills }: SkillListProps) => (
  <section className="mb-8">
    <SectionTitle icon="skills">Kỹ năng</SectionTitle>
    <div className="space-y-5">
      {groupSkills(skills).map(({ group, items }) => (
        <div key={group}>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {group}
          </h3>
          <ul className="space-y-3">
            {items.map((skill) => (
              <li key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                {/* Thanh mức độ: in CSS dùng print-exact để giữ màu nền */}
                <div className="print-exact h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-sky-500"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)
