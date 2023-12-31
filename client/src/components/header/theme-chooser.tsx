"use client"

// REF: https://github.com/saadeghi/theme-change
import { useEffect } from 'react';
import { themeChange } from 'theme-change'
import { useTheme } from '@/context/ThemeContext';

export default function ThemeChooser() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Add select menu to choose theme
  return (
    <div className="relative flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-2.5 top-1.5 h-5 w-5 text-[var(--color-content-400)]">
        <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      <select data-choose-theme data-key="theme" onChange={handleThemeChange}>
        <option value="slate-light">Slate Light</option>
        <option value="slate-dark">Slate Dark</option>
        <option value="light-grey">Light Grey</option>
        <option value="dark-grey">Dark Grey</option>
      </select>
    </div>
  )
}
