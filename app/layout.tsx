import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SanShin',
  description: "Create by SanShin's team",
  generator: 'sanshin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
