"use client"

const metrics = [
    { value: "50+", label: "Portfolio Companies Transformed" },
    { value: "3x", label: "Average ROI Achieved" },
    { value: "100", label: "Days to Production" },
    { value: "15+", label: "PE Firms Advised" },
]

export function Metrics() {
    return (
        <section className="py-20 bg-midnight text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                        >
                            <div className="font-display text-5xl md:text-6xl font-bold text-sea-green mb-2">
                                {metric.value}
                            </div>
                            <div className="text-pearl/80 font-medium text-sm md:text-base max-w-[150px]">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
