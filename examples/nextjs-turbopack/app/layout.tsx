import { Xray } from '@stinsky/xray'

export const metadata = { title: 'xray — Next.js + Turbopack' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Xray />
      </body>
    </html>
  )
}
