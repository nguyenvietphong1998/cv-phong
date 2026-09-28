import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// Ưu tiên 1: lựa chọn đã lưu trong localStorage
// Ưu tiên 2: cài đặt giao diện tối/sáng của hệ điều hành
const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem('cv-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Hook quản lý giao diện tối/sáng: gắn/xóa class `dark` trên <html> và lưu lại lựa chọn */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('cv-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
