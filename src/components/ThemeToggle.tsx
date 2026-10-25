import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', theme === 'dark' ? '#2d353b' : '#f4f3ed')
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const initial: Theme =
            saved === 'light' || saved === 'dark'
                ? saved
                : media.matches
                  ? 'dark'
                  : 'light'
        setTheme(initial)
        applyTheme(initial)

        const updateSystemTheme = () => {
            if (!['light', 'dark'].includes(localStorage.getItem('theme') ?? '')) {
                const next = media.matches ? 'dark' : 'light'
                setTheme(next)
                applyTheme(next)
            }
        }
        media.addEventListener('change', updateSystemTheme)
        return () => media.removeEventListener('change', updateSystemTheme)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', next)
        setTheme(next)
        applyTheme(next)
    }

    const Icon = theme === 'dark' ? Moon : Sun
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`${theme} theme. Switch to ${nextTheme}`}
            title={`Switch to ${nextTheme} theme`}
        >
            <Icon aria-hidden="true" size={16} />
            <span>{theme}</span>
        </button>
    )
}
