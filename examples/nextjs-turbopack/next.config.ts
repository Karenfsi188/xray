import type { NextConfig } from 'next'
import { xrayPlugin } from '@stinsky/xray/plugin'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      ...xrayPlugin({ bundler: 'turbopack' }) as any,
    },
  },
}

export default nextConfig
