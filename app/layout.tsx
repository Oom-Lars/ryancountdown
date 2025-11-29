import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Infinite Love Story 💜',
  description: 'Counting down to forever with you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-purple-950 to-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
