import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/i18n/context'
import { ThemeCustomProvider } from '@/lib/theme-custom'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GUYA FIBRE — Experts Fibre Optique en Guyane',
  description: 'Entreprise guyanaise spécialisée dans le déploiement, la maintenance et les études de réseaux fibre optique. Intervention sur toute la Guyane — zones urbaines, rurales et isolées.',
  keywords: 'fibre optique, FTTH, FTTO, Guyane, déploiement fibre, maintenance réseau, Saint-Laurent-du-Maroni, ingénierie réseau',
  authors: [{ name: 'GUYA FIBRE', url: 'https://guyafibre.com' }],
  creator: 'GUYA FIBRE',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon', sizes: '192x192', type: 'image/png' },
      { url: '/icon', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/icon'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GUYA FIBRE',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'GUYA FIBRE — Experts Fibre Optique en Guyane',
    description: 'Déploiement et maintenance de réseaux fibre optique sur tout le territoire guyanais.',
    url: 'https://guyafibre.com',
    siteName: 'GUYA FIBRE',
    images: [
      {
        url: 'https://guyafibre.com/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'GUYA FIBRE - Technicien en intervention fibre optique',
      },
      {
        url: 'https://guyafibre.com/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'GUYA FIBRE Logo',
      },
    ],
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GUYA FIBRE — Experts Fibre Optique',
    description: 'Solutions fibre optique complètes en Guyane',
    images: ['https://guyafibre.com/images/hero-bg.jpg'],
    creator: '@guyafibre',
  },
  alternates: {
    canonical: 'https://guyafibre.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="shortcut icon" href="/icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'GUYA FIBRE',
              description: 'Entreprise guyanaise spécialisée dans le déploiement et la maintenance de réseaux fibre optique',
              url: 'https://guyafibre.com',
              telephone: '+594 694435484',
              email: 'contact@guyafibre.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12 Rue des Palmiers',
                addressLocality: 'Saint-Laurent-du-Maroni',
                postalCode: '97320',
                addressCountry: 'GF',
                addressRegion: 'Guyane française',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 5.5026,
                longitude: -54.0333,
              },
              openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00',
              sameAs: ['https://wa.me/594694435484'],
              image: 'https://guyafibre.com/images/logo.jpg',
              logo: 'https://guyafibre.com/icon.png',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeCustomProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeCustomProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster />
      </body>
    </html>
  )
}
