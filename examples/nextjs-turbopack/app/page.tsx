'use client'

import { useState } from 'react'

export default function Home() {
  return (
    <div style={styles.page}>
      <Header />
      <Hero />
      <Stats />
      <FeatureCard />
      <Footer />
    </div>
  )
}

// --- Header with dropdown ---

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <Logo />
        <nav style={styles.nav}>
          <NavLink>Home</NavLink>
          <div style={{ position: 'relative' }}>
            <NavLink onClick={() => setOpen(!open)}>
              Powers ▾
            </NavLink>
            {open && (
              <PowersDropdown onClose={() => setOpen(false)} />
            )}
          </div>
          <NavLink>Origins</NavLink>
          <NavLink>Allies</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div style={styles.logo}>
      <span style={{ color: '#ef4444', fontWeight: 900, fontSize: 24 }}>S</span>
      <span style={{ fontWeight: 700, fontSize: 16, marginLeft: 4 }}>KRYPTON DB</span>
    </div>
  )
}

function NavLink({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={styles.navLink}>
      {children}
    </button>
  )
}

function PowersDropdown({ onClose }: { onClose: () => void }) {
  const powers = [
    { name: 'X-ray Vision', icon: '👁' },
    { name: 'Heat Vision', icon: '🔥' },
    { name: 'Super Strength', icon: '💪' },
    { name: 'Flight', icon: '🦅' },
    { name: 'Freeze Breath', icon: '❄️' },
  ]

  return (
    <div style={styles.dropdown}>
      {powers.map((p) => (
        <DropdownItem key={p.name} onClick={onClose}>
          <span>{p.icon}</span>
          <span>{p.name}</span>
        </DropdownItem>
      ))}
    </div>
  )
}

function DropdownItem({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} style={styles.dropdownItem}>
      {children}
    </button>
  )
}

// --- Hero ---

function Hero() {
  return (
    <section style={styles.hero}>
      <Badge>Kryptonian Archive</Badge>
      <h1 style={styles.heroTitle}>The Man of Steel</h1>
      <p style={styles.heroSub}>
        Kal-El of Krypton. Last son of a dying world.
        <br />
        Earth&apos;s greatest protector.
      </p>
    </section>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span style={styles.badge}>{children}</span>
}

// --- Stats ---

function Stats() {
  const stats = [
    { label: 'Speed', value: '7,700 mph', accent: '#3b82f6' },
    { label: 'Strength', value: '∞', accent: '#ef4444' },
    { label: 'Vision', value: 'X-ray', accent: '#a855f7' },
    { label: 'Flight', value: 'Mach 10', accent: '#f59e0b' },
  ]

  return (
    <section style={styles.stats}>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </section>
  )
}

function StatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div style={styles.statCard}>
      <div style={{ ...styles.statAccent, background: accent }} />
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  )
}

// --- Feature card ---

function FeatureCard() {
  return (
    <section style={styles.feature}>
      <div style={styles.featureIcon}>👁</div>
      <h2 style={styles.featureTitle}>X-ray Vision</h2>
      <p style={styles.featureText}>
        The ability to see through solid objects. Kal-El can focus his vision to
        penetrate most materials, revealing the hidden structure beneath — walls,
        machines, even the components of a React application.
      </p>
      <div style={styles.featureHint}>
        Press <kbd style={styles.kbd}>⌘</kbd> + <kbd style={styles.kbd}>⇧</kbd> + <kbd style={styles.kbd}>X</kbd> to activate
      </div>
    </section>
  )
}

// --- Footer ---

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <FooterLink>GitHub</FooterLink>
        <FooterLink>npm</FooterLink>
        <FooterLink>Docs</FooterLink>
      </div>
      <p style={styles.footerNote}>
        Built with @stinsky/xray — click-to-component for React 19
      </p>
    </footer>
  )
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return <span style={styles.footerLink}>{children}</span>
}

// --- Styles ---

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#0a0a0f',
    color: '#e5e7eb',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },

  // Header
  header: {
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(10, 10, 15, 0.8)',
  },
  headerInner: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 24px',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: 500,
    padding: '6px 12px',
    borderRadius: 6,
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: 4,
    background: '#1a1a2e',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 10,
    padding: 4,
    minWidth: 180,
    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
    zIndex: 200,
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    background: 'none',
    border: 'none',
    color: '#e5e7eb',
    fontSize: 14,
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer',
    textAlign: 'left',
  },

  // Hero
  hero: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '80px 24px 48px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 900,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    margin: '16px 0',
    background: 'linear-gradient(135deg, #fff 0%, #60a5fa 50%, #ef4444 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSub: {
    fontSize: 18,
    color: '#6b7280',
    lineHeight: 1.6,
  },
  badge: {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#a855f7',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: 20,
    padding: '4px 14px',
  },

  // Stats
  stats: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 24px 48px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
  },
  statCard: {
    background: '#111119',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  statAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    borderRadius: '12px 12px 0 0',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  // Feature
  feature: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '48px 24px',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#9ca3af',
    lineHeight: 1.7,
    maxWidth: 560,
    margin: '0 auto 24px',
  },
  featureHint: {
    fontSize: 14,
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  kbd: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
    height: 24,
    padding: '0 6px',
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'system-ui',
    background: '#1a1a2e',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 5,
    color: '#e5e7eb',
  },

  // Footer
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    maxWidth: 960,
    margin: '0 auto',
    padding: '32px 24px',
    textAlign: 'center',
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 16,
  },
  footerLink: {
    fontSize: 14,
    color: '#6b7280',
    cursor: 'pointer',
  },
  footerNote: {
    fontSize: 12,
    color: '#374151',
  },
}
