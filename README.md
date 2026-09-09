# Smart Treasury Account

Smart Treasury - secure, policy-driven treasury operations for Web3 built on Stellar.

Marketing site for <https://smarttreasury.io>. It owns the apex domain and
proxies the two sibling deployments by path, so visitors see one origin:

| Path      | Served by                                       | Repository  |
| --------- | ----------------------------------------------- | ----------- |
| `/`       | this site                                       | `marketing` |
| `/app/*`  | the dApp, built with `basePath: '/app'`         | `dApp`      |
| `/docs/*` | the VitePress docs, built with `base: '/docs/'` | `docs`      |

The rewrites live in `next.config.ts`. Links to `/app` and `/docs` are plain
`<a>` elements on purpose: `next/link` would try to soft-navigate into a
different Next.js app.

## Development

```bash
pnpm install
pnpm dev
```

## Environment variables

Copy `.env.example` to `.env.local` to point the proxy at other origins, for
example a local dApp dev server.

- `APP_ORIGIN`: origin of the dApp deployment (default `https://sta-dapp.vercel.app`).
- `DOCS_ORIGIN`: origin of the docs deployment (default `https://sta-docs.vercel.app`).

Both are read by `next.config.ts` at build time and never reach the browser.
The proxied projects must be reachable without Vercel Deployment Protection,
or with a protection bypass configured here.
