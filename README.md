# EverAfter Wedding

[cloudflarebutton]

A modern, production-ready React application scaffolded for Cloudflare Workers. Built with Vite, TypeScript, Tailwind CSS, and a comprehensive UI component library.

## Description

EverAfter Wedding provides a fast, serverless-first foundation for building beautiful web experiences. It includes a complete frontend stack integrated with Cloudflare Workers for API routes, asset serving, and edge deployment.

## Key Features

- React 18 with TypeScript and React Router
- Dark/light theme support with persistent preferences
- Responsive sidebar layout and mobile-first design
- Pre-configured error boundaries and client-side error reporting
- Full suite of accessible shadcn/ui components
- Hono-powered API routes on Cloudflare Workers
- Built-in live reload and development server

## Technology Stack

**Frontend**
- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui components
- React Query, React Router, Framer Motion
- Sonner (toast notifications)

**Backend & Deployment**
- Cloudflare Workers
- Hono framework
- Wrangler CLI for deployment and type generation
- Durable Objects and KV ready (via core utilities)

## Prerequisites

- [Bun](https://bun.sh) (recommended runtime)
- Cloudflare account (for deployment)

## Getting Started

```bash
# Install dependencies
bun install

# Start the development server
bun dev
```

The application will be available at `http://localhost:3000`.

## Development Scripts

- `bun dev` – Start Vite dev server with Workers integration
- `bun build` – Production build
- `bun preview` – Preview production build locally
- `bun deploy` – Build and deploy to Cloudflare
- `bun cf-typegen` – Generate Cloudflare Workers types

## Project Structure

```
src/                  # React frontend
worker/               # Cloudflare Worker code
  ├── index.ts        # Main worker entry (do not modify)
  ├── userRoutes.ts   # Add your API routes here
  └── core-utils.ts   # Shared types and utilities
```

## Deployment

Deploy directly to Cloudflare Workers with a single click or via CLI.

[cloudflarebutton]

### Manual Deployment

```bash
bun run deploy
```

After deployment, your application will be live at your assigned `*.workers.dev` domain.

## Contributing

Contributions are welcome. Please open an issue or pull request for improvements to the template, components, or documentation.

## License

This project is licensed under the MIT License.