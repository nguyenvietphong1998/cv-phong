import { useTheme } from './hooks/useTheme'
import { cvData } from './data/cv'
import { TopBar } from './components/TopBar'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

/**
 * Bố cục chính của trang CV:
 * - Mobile: 1 cột (sidebar thành khối đầu trang)
 * - Desktop (md trở lên): 2 cột — sidebar 320px + nội dung linh hoạt
 */
const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <TopBar theme={theme} onToggleTheme={toggleTheme} />

        <div className="cv-card overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-900 print:rounded-none print:shadow-none">
          <div className="grid md:grid-cols-[320px_1fr]">
            <Sidebar data={cvData} />
            <MainContent data={cvData} />
          </div>
          <Footer profile={cvData.profile} />
        </div>
      </div>
    </div>
  )
}

export default App
