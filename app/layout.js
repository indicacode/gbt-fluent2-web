import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MailPage',
  description: 'Shadcn like mailpage',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-white text-white' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
