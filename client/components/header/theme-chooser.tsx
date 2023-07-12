// Create theme chooser component
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
            <select data-choose-theme onChange={(e) => themeChange(e.target.value)} className='select select-bordered select-sm'>
                <option disabled>Theme</option>
                <option value="slate-light">Slate Light</option>
                <option value="slate-dark">Slate Dark</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="black">Black</option>
                <option value="matrix">Matrix</option>
            </select>
        </div>
    )
}
