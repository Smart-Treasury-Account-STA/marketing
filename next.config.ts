import type { NextConfig } from 'next'

// smarttreasury.io is served by three Vercel projects behind one origin. This
// site owns the apex domain; the dApp and the docs are separate deployments
// proxied here by path, so users see one domain and search engines one host.
// Decision record: agent/adr/0004 in the workspace knowledge base.
//
// - APP_ORIGIN: the dApp (org/dApp). It is built with `basePath: '/app'`, so
//   its routes and assets already carry the prefix; the path is forwarded
//   as-is.
// - DOCS_ORIGIN: the VitePress docs (org/docs), built with `base: '/docs/'`.
//   Its asset and page URLs carry the prefix and resolve back through this
//   rewrite; the docs project serves pages from its root, so the prefix is
//   stripped on the way out.
const APP_ORIGIN = process.env.APP_ORIGIN ?? 'https://sta-dapp.vercel.app'
const DOCS_ORIGIN = process.env.DOCS_ORIGIN ?? 'https://sta-docs.vercel.app'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/app', destination: `${APP_ORIGIN}/app` },
      { source: '/app/:path*', destination: `${APP_ORIGIN}/app/:path*` },
      { source: '/docs', destination: `${DOCS_ORIGIN}/` },
      { source: '/docs/:path*', destination: `${DOCS_ORIGIN}/:path*` }
    ]
  }
}

export default nextConfig
