"use client"

interface CookieSettingsButtonProps {
    className?: string
    children?: React.ReactNode
}

export function CookieSettingsButton({ className, children }: CookieSettingsButtonProps) {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('attercop_cookie_consent')
            window.location.reload()
        }
    }

    return (
        <button
            onClick={handleClick}
            className={className || "text-sm text-pearl/40 hover:text-pearl transition-colors cursor-pointer"}
        >
            {children || "Cookie Settings"}
        </button>
    )
}
