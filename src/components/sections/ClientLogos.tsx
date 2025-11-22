"use client"

interface Client {
  name: string
  website: string
  logo?: string
  category: 'pe' | 'business' | 'life-sciences'
}

interface ClientLogosProps {
  variant?: 'homepage' | 'pe-firms' | 'businesses' | 'life-sciences'
  title?: string
}

const clients: Record<string, Client> = {
  montagu: {
    name: "Montagu Private Equity",
    website: "https://montagu.com",
    category: 'pe'
  },
  'growth-capital': {
    name: "Growth Capital Partners",
    website: "https://growthcapital.co.uk",
    category: 'pe'
  },
  'yfm': {
    name: "YFM Equity Partners",
    website: "https://yfmep.com",
    category: 'pe'
  },
  'kkr': {
    name: "KKR",
    website: "https://kkr.com",
    category: 'pe'
  },
  'exponent': {
    name: "Exponent Private Equity",
    website: "https://exponentpe.com",
    category: 'pe'
  },
  'london-city-airport': {
    name: "London City Airport",
    website: "https://londoncityairport.com",
    category: 'business'
  },
  'bridewell': {
    name: "Bridewell",
    website: "https://bridewell.com",
    category: 'business'
  },
  'brightlocal': {
    name: "BrightLocal",
    website: "https://brightlocal.com",
    category: 'business'
  },
  'flint-global': {
    name: "Flint Global",
    website: "https://flintglobal.com",
    category: 'business'
  },
  'hippo-digital': {
    name: "Hippo Digital",
    website: "https://hippodigital.co.uk",
    category: 'business'
  },
  'plandek': {
    name: "Plandek",
    website: "https://plandek.com",
    category: 'business'
  },
  'verdantix': {
    name: "Verdantix",
    website: "https://verdantix.com",
    category: 'business'
  },
  'xeinadin': {
    name: "Xeinadin",
    website: "https://xeinadin.com",
    category: 'business'
  },
  'coriolis-pharma': {
    name: "Coriolis Pharma",
    website: "https://coriolis-pharma.com",
    category: 'life-sciences'
  },
  'envision-pharma': {
    name: "Envision Pharma",
    website: "https://envisionpharma.com",
    category: 'life-sciences'
  },
  'prime-global': {
    name: "Prime Global",
    website: "https://primeglobal.com",
    category: 'life-sciences'
  },
  'ampersand-health': {
    name: "Ampersand Health",
    website: "https://ampersandhealth.co.uk",
    category: 'life-sciences'
  }
}

const clientsByVariant: Record<string, string[]> = {
  homepage: [
    'montagu',
    'growth-capital',
    'london-city-airport',
    'verdantix',
    'brightlocal',
    'bridewell',
    'coriolis-pharma',
    'envision-pharma',
    'prime-global'
  ],
  'pe-firms': [
    'montagu',
    'growth-capital',
    'yfm',
    'kkr',
    'exponent'
  ],
  businesses: [
    'london-city-airport',
    'bridewell',
    'brightlocal',
    'flint-global',
    'hippo-digital',
    'plandek',
    'verdantix',
    'xeinadin'
  ],
  'life-sciences': [
    'coriolis-pharma',
    'envision-pharma',
    'prime-global',
    'ampersand-health'
  ]
}

export function ClientLogos({ variant = 'homepage', title }: ClientLogosProps) {
  const clientSlugs = clientsByVariant[variant] || clientsByVariant.homepage
  const displayClients = clientSlugs.map(slug => clients[slug]).filter(Boolean)

  const defaultTitle = variant === 'homepage'
    ? "Trusted by Leading PE Firms and Their Portfolio Companies"
    : variant === 'pe-firms'
    ? "Trusted by Private Equity Firms"
    : variant === 'businesses'
    ? "Trusted by Portfolio Companies"
    : "Trusted by Life Sciences Leaders"

  return (
    <section className="py-16 md:py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl text-center text-midnight mb-12 md:mb-16">
          {title || defaultTitle}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-x-16 md:gap-y-12 max-w-5xl mx-auto items-center">
          {displayClients.map((client) => (
            <a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 md:max-h-20 w-auto max-w-[180px] md:max-w-[200px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <div className="text-center px-4">
                  <span className="font-heading text-lg md:text-xl text-midnight/60 group-hover:text-midnight transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
