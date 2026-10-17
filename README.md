<div align="left">

  <img src="https://cdn.paddlewheel.org/brand/brandfull.svg" height="25px"/>

</div>

# usercue-docs — Documentation Site

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-black.svg?logo=next.js)](https://nextjs.org)
[![Bun](https://img.shields.io/badge/Bun-black.svg?logo=bun)](https://bun.sh)

**usercue-docs** is the official documentation site for **Usercue**, an open-source feedback board tool for teams. It is built with Next.js and Fumadocs, served via Bun, and deployed to the web — covering getting started, settings, OAuth setup, boards, and workspace guides.

---

## Getting started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.4

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Paddlewheel-Inc/usercue-docs.git
   cd usercue-docs
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

   The site will be available at `http://localhost:3000`.

> [!TIP]
> No environment variables are required. Run `bun run build && bun start` to serve the production build locally before deploying.

---

## Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `bun dev`         | Start the dev server with HMR              |
| `bun run build`   | Build for production                       |
| `bun start`       | Serve the production build                 |
| `bun run lint`    | Check code with Biome                      |
| `bun run format`  | Format code with Biome                     |

---

## Docker

```bash
docker build -t usercue-docs .
docker run -p 3000:3000 usercue-docs
```

---

## Contributing

Contributions are welcome — whether it's fixing a typo, adding a page, or reporting a bug.

Before opening a pull request:

1. Run `bun run lint` and confirm there are no errors.
2. Keep changes small and focused.
3. Add new docs as `.mdx` files inside `src/docs/` — they appear on the site automatically.

Found a bug or have an idea? [Open an issue](https://github.com/Paddlewheel-Inc/usercue-docs/issues), or chat with us on [Discord](https://discord.gg/7e4jd9Mcaa).

---

## Tech stack

| Layer         | Technology                                             |
| ------------- | ------------------------------------------------------ |
| Framework     | [Next.js 16](https://nextjs.org)                       |
| Docs engine   | [Fumadocs](https://fumadocs.dev) (MDX)                |
| Runtime       | [Bun](https://bun.sh)                                  |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com)             |
| Components    | [Base UI](https://base-ui.com) · Lucide icons          |
| Linting       | [Biome](https://biomejs.dev)                           |
| Language      | TypeScript                                             |

---

## Repository structure

```
usercue-docs/
├── src/
│   ├── docs/              # All docs pages (one .mdx file per page)
│   ├── app/               # Next.js app router (routes, API)
│   ├── components/        # Shared UI (MDX, TOC, sidebar, etc.)
│   ├── layouts/           # Page layouts
│   └── lib/               # Helpers (source, urls, hotkey, etc.)
├── public/                # Static assets
├── Dockerfile             # Bun-based production image
├── next.config.ts         # Next.js + Fumadocs config
└── package.json
```

### Docs sections

| Section              | Path                         |
| -------------------- | ---------------------------- |
| Getting Started      | `src/docs/getting-started/`  |
| Settings             | `src/docs/settings/`         |
| OAuth                | `src/docs/oauth/`            |
| Boards               | `src/docs/boards/`           |
| Workspace            | `src/docs/workspace/`        |

---

## Changelog

See [GitHub Releases](https://github.com/Paddlewheel-Inc/usercue-docs/releases) for the changelog.

---

## License & Legal

Copyright (c) 2026 Paddlewheel Inc.

This repository is open-source software licensed under the [MIT License](LICENSE).

### Trademarks & Branding
The Paddlewheel name, logo, and associated branding are protected trademarks and intellectual property of Paddlewheel Inc. Standard open-source permissions granted under the MIT License do not grant rights to use Paddlewheel trademarks or logos without prior written consent.

### Third-Party Acknowledgments
* **Fumadocs:** Built using [Fumadocs](https://fumadocs.dev/) ([Repository](https://github.com/fuma-nama/fumadocs) | [License](https://github.com/fuma-nama/fumadocs/blob/main/LICENSE))
* **Next.js:** Built on [Next.js](https://nextjs.org/) ([Repository](https://github.com/vercel/next.js))
* **Respective Rights:** All third-party libraries, software, trademarks, and logos referenced or used in this project are the property of their respective owners.

---

<div align="center">
  <sub>Maintained by <a href="https://github.com/Paddlewheel-Inc">Paddlewheel Inc</a></sub>
</div>
