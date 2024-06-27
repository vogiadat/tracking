import AuthProvider from '@/components/AuthProvider'
import { Inter } from 'next/font/google'
import './globals.css'
import { FlashToaster } from '@/components/flash-toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Delivery',
  description: 'Tracking Your Delivery',
  icons: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      sizes: '128x128',
      url: '/assets/icons/favicon.ico'
    },
    {
      rel: 'shortcut icon',
      sizes: '128x128',
      url: '/assets/icons/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: '/assets/icons/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: '/assets/icons/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: '/assets/icons/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/icons/favicon.ico'
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <FlashToaster />
        <AuthProvider>
          <div className='app'>
            <div
              className='hero min-h-screen min-w-full'
              style={{ backgroundImage: 'url("/assets/images/bg_main.jpg")' }}
            >
              <div className='hero-overlay bg-opacity-60'></div>
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
