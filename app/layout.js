import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App Next JS</title>
      </head>
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
