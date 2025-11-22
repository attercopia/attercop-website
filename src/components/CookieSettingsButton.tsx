"use client"

export function CookieSettingsButton() {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('attercop_cookie_consent')
            window.location.reload()
        }
    }

    return (
        <button
            onClick={handleClick}
            className="text-sm text-pearl/40 hover:text-pearl transition-colors cursor-pointer"
        >
            Cookie Settings
        </button>
    )
}
