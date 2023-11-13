import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useTheme } from '@/context/ThemeContext';
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://search.photos'),
  title: 'Search.Photos: Multisite Image Search',
  description: 'Search multiple websites for images with one click!',
  robots: {
    index: false, // turn off indexing for all pages while in development
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': '-1',
    }
  },
  canonical: 'https://search.photos',
  verification: {
    google: '',
    bing: '',
    yandex: '',
  },
  og: {
    title: '',
    description: '',
    type: 'website',
    url: '',
    image: '',
    site_name: '',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
  },
  facebook: {
    app_id: '',
  },
  favicon: '/favicon.ico',
  apple: {
    icon: '/apple-touch-icon.png',
    icon_180: '/apple-touch-icon.png',
    icon_167: '/apple-touch-icon.png',
    icon_152: '/apple-touch-icon.png',
    icon_120: '/apple-touch-icon.png',
    icon_76: '/apple-touch-icon.png',
    icon_60: '/apple-touch-icon.png',
    icon_57: '/apple-touch-icon.png',
  },
  ms: {
    tile: '/mstile-144x144.png',
    tile_color: '#ffffff',
  },
  manifest: '/manifest.json',
  safari: {
    pinned: '/safari-pinned-tab.svg',
  },
  mask_icon: '/safari-pinned-tab.svg',
  msapplication: {
    tooltip: 'Tooltip',
    start_url: '/',
    tile_image: '/mstile-144x144.png',
    tile_color: '#ffffff',
  },
  yandex: {
    verification: '',
  },
  android: {
    icon: '/android-chrome-192x192.png',
    icon_192: '/android-chrome-192x192.png',
    icon_512: '/android-chrome-512x512.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeContext = (typeof useTheme === 'function') ? useTheme() : null;
  const theme = themeContext ? themeContext.theme : 'slate-light';

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
