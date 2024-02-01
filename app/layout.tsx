import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'MailPage',
  description: 'Shadcn like mailpage',
}

export default function RootLayout({ children }) {
  return (
    <html >
      <body >{children}</body>
    </html>
  )
}
