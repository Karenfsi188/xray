import { codeInspectorPlugin } from 'code-inspector-plugin'

export interface XrayPluginOptions {
  /** Which bundler you're using. Required. */
  bundler: 'webpack' | 'vite' | 'turbopack' | 'rspack' | 'esbuild'
  /** Editor to open files in. Default: 'code' (VS Code) */
  editor?: string
}

/**
 * Build plugin that injects `data-insp-path` attributes on every DOM element.
 * Wraps `code-inspector-plugin` with xray defaults.
 *
 * For webpack/vite/rspack/esbuild: returns a bundler plugin object.
 * For turbopack: returns Record<string, { loaders: Array<{ loader: string; options: object }> }>
 * matching the Next.js `turbopack.rules` format.
 */
export function xrayPlugin(options: XrayPluginOptions) {
  return codeInspectorPlugin({
    bundler: options.bundler as any,
    editor: options.editor ?? 'code' as any,
    hotKeys: false,
    showSwitch: false,
  })
}
