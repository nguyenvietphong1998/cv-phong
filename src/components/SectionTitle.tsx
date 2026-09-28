import { CalendarDays, GraduationCap, Info, Award, Briefcase, FolderGit2, UserRound, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Ánh xạ tên section -> icon Lucide dùng chung cho các tiêu đề
const ICONS: Record<string, LucideIcon> = {
  about: Info,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderGit2,
  contact: UserRound,
  skills: Wrench,
  certificates: Award,
  profile: CalendarDays,
}

interface SectionTitleProps {
  icon: keyof typeof ICONS
  children: string
}

/** Tiêu đề section có icon, dùng chung trong sidebar và main content */
export const SectionTitle = ({ icon, children }: SectionTitleProps) => {
  const Icon = ICONS[icon]
  return (
    <h2 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-sky-700 dark:text-sky-400">
      <Icon size={20} aria-hidden="true" />
      {children}
    </h2>
  )
}
