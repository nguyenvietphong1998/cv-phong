import type { Profile } from '../types/cv'

interface FooterProps {
  profile: Profile
}

/** Chân trang: bản quyền + năm hiện tại */
export const Footer = ({ profile }: FooterProps) => (
  <footer className="no-print border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
    © {new Date().getFullYear()} {profile.fullName} — Xây dựng bằng ReactJS + TypeScript + Tailwind CSS
  </footer>
)
