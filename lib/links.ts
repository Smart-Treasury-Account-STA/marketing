// The dApp and the docs are separate deployments proxied under this site's
// origin by next.config.ts. Links to them must be plain <a> elements, not
// next/link: the router would try to soft-navigate and fetch a page payload
// from a different Next.js app.
export const APP_URL = '/app'
export const DOCS_URL = '/docs'
