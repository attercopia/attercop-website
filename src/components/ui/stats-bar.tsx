interface StatItem {
    value: string
    label: string
}

interface StatsBarProps {
    stats: StatItem[]
    className?: string
}

export function StatsBar({ stats, className = "" }: StatsBarProps) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="font-display text-3xl md:text-4xl font-bold text-sea-green mb-2">
                        {stat.value}
                    </div>
                    <div className="text-sm text-midnight/60 uppercase tracking-wider">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    )
}
