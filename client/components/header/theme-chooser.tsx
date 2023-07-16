// REF: https://github.com/saadeghi/theme-change
import { useEffect } from 'react';
import { themeChange } from 'theme-change'

export default function ThemeChooser() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    // Add select menu to choose theme
    return (
        <div className="form-control max-w-xs">
            <select data-choose-theme>
                <option disabled>Theme</option>
                <option value="slate-light">Slate Light</option>
                <option value="slate-dark">Slate Dark</option>
                <option value="light-grey">Light Grey</option>
                <option value="dark-grey">Dark Grey</option>
                <option value="matrix">Matrix</option>
            </select>
        </div>
    )
}
