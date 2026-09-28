import { Moon, Printer, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

interface TopBarProps {
  theme: Theme
  onToggleTheme: () => void
}

/** Thanh công cụ dính trên đầu: chuyển giao diện tối/sáng + in/xuất PDF (ẩn khi in) */
export const TopBar = ({ theme, onToggleTheme }: TopBarProps) => (
  <header className="no-print sticky top-0 z-10 mb-6 flex items-center justify-end gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-slate-900/80">
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {theme === 'dark' ? 'Sáng' : 'Tối'}
    </button>
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="In CV hoặc xuất PDF"
      className="flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-sky-700"
    >
      <Printer size={16} />
      In / PDF
    </button>
  </header>
)
