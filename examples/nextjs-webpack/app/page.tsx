export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>@stinsky/xray</h1>
      <p>Next.js + Webpack example</p>
      <Card title="Getting started">
        Press <kbd>⌘+Shift+X</kbd> to toggle the inspector, then hover over any element.
      </Card>
    </main>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
