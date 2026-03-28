import { Xray } from '@stinsky/xray'

export const metadata = { title: 'xray — Superman Demo' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Xray />
      </body>
    </html>
  )
}
