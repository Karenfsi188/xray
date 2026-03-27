import type { NextConfig } from 'next'
import { xrayPlugin } from '@stinsky/xray/plugin'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(xrayPlugin({ bundler: 'webpack' }))
    return config
  },
}

export default nextConfig
