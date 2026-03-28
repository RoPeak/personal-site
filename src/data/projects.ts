export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  screenshot?: string;
  featured: boolean;
  tier: 1 | 2;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'signal-breach',
    title: 'Signal Breach',
    tagline: 'Deterministic browser RTS focused on signal warfare',
    description:
      'A browser-based real-time strategy prototype built around deterministic simulation, replayable battle tests, and a rugged retro tactical display. Players secure uplinks, extend radar coverage, reposition strike packages, and issue command-queued orders through a React + Canvas shell that consumes a fixed-step sim.',
    tags: ['TypeScript', 'React 19', 'Canvas 2D', 'Vite', 'Vitest', 'Game Simulation'],
    githubUrl: 'https://github.com/RoPeak/signal-breach',
    featured: true,
    tier: 1,
    order: 0,
  },
  {
    id: 'marketlens',
    title: 'MarketLens',
    tagline: 'End-to-end financial market data pipeline',
    description:
      'A complete data engineering pipeline that ingests equity, crypto, and macroeconomic data from free public APIs, transforms it through a medallion architecture (Bronze, Silver, Gold), and surfaces analytics in an interactive Streamlit dashboard. Runs locally with a single docker compose up - no API keys required.',
    tags: ['Python', 'dbt', 'DuckDB', 'Polars', 'Prefect', 'Streamlit', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/RoPeak/marketlens',
    screenshot: '/assets/images/projects/marketlens-preview.png',
    featured: true,
    tier: 1,
    order: 1,
  },
  {
    id: 'quarterclose',
    title: 'QuarterClose',
    tagline: 'Bookkeeping assistant for UK sole traders',
    description:
      'A mobile-first bookkeeping and quarter-close assistant built as a TypeScript monorepo. Implements authentication, CSV import, bank sync, transaction review, receipt handling, UK tax quarter materialisation, and export share links - with full integration and Playwright end-to-end test coverage across a NestJS backend and Next.js frontend.',
    tags: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'BullMQ',
      'Redis',
      'Playwright',
      'Vitest',
    ],
    githubUrl: 'https://github.com/RoPeak/QuarterClose',
    screenshot: '/assets/images/projects/quarterclose-preview.png',
    featured: true,
    tier: 1,
    order: 2,
  },
  {
    id: 'plexify',
    title: 'Plexify',
    tagline: 'CLI tool for organising media libraries',
    description:
      'A Python CLI that organises movie, TV, and music files into a Plex-compatible structure. Infers titles and years from filenames, queries Wikidata, TVMaze, and MusicBrainz with a confidence-based matching system and a 4-level episode cache. Safe by default: all operations are dry-run until explicitly confirmed.',
    tags: ['Python', 'CLI', 'pytest', 'GitHub Actions', 'Wikidata', 'TVMaze'],
    githubUrl: 'https://github.com/RoPeak/plexify',
    screenshot: '/assets/images/projects/plexify-preview.jpg',
    featured: true,
    tier: 1,
    order: 3,
  },
  {
    id: 'algorithm-playground-api',
    title: 'Algorithm Playground API',
    tagline: 'Algorithm benchmarking service with a React frontend',
    description:
      'A FastAPI backend and React frontend for benchmarking sorting algorithms. Benchmark jobs run asynchronously via Redis and RQ, with results stored in PostgreSQL and surfaced in a Vite-built frontend. Includes bearer token auth, job tracking, comparison reporting, and a Docker Compose stack.',
    tags: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Redis',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
    ],
    githubUrl: 'https://github.com/RoPeak/algorithm-playground-api',
    screenshot: '/assets/images/projects/algorithm-playground-api-preview.png',
    featured: false,
    tier: 2,
    order: 4,
  },
  {
    id: 'algo-visualiser',
    title: 'Algo-Visualiser',
    tagline: 'Interactive sorting algorithm visualiser',
    description:
      'An interactive browser tool for visualising 7 sorting algorithms - Bubble, Merge, Quick, Insertion, Selection, Heap, and Cocktail Shaker. Built with React 19 and Framer Motion, with clean separation between algorithm logic, animation state, and UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/RoPeak/Algo-Visualiser',
    screenshot: '/assets/images/projects/algo-visualiser-preview.png',
    featured: false,
    tier: 2,
    order: 5,
  },
  {
    id: 'swiftseek',
    title: 'SwiftSeek',
    tagline: 'Fast local file search for Windows',
    description:
      'A Windows desktop search application built on .NET 8 and WinUI 3. Uses Lucene.NET for full-text content indexing with a lightweight metadata fallback scan mode. Designed as a thin UI shell over a testable core search library.',
    tags: ['C#', '.NET 8', 'WinUI 3', 'Lucene.NET', 'xUnit'],
    githubUrl: 'https://github.com/RoPeak/SwiftSeek',
    screenshot: '/assets/images/projects/swiftseek-preview.png',
    featured: false,
    tier: 2,
    order: 6,
  },
  {
    id: 'personal-site',
    title: 'This Website',
    tagline: 'You are looking at it',
    description:
      'A personal portfolio site built with Astro 6, Tailwind CSS v4, and TypeScript - deployed on Cloudflare Workers with Git-connected builds. Features a pure-CSS crossfade slideshow, scroll-reveal animations, a scroll progress bar, and zero client-side JavaScript frameworks. The irony of listing your portfolio site as a project on your portfolio site is not lost.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
    githubUrl: 'https://github.com/RoPeak/personal-site',
    liveUrl: 'https://ronan-peacock.com',
    screenshot: '/assets/images/projects/personal-site-preview.png',
    featured: false,
    tier: 2,
    order: 7,
  },
  {
    id: 'chess-ai',
    title: 'Chess-AI',
    tagline: 'Full chess implementation with a Swing GUI',
    description:
      'A complete chess game in Java 22, including full rule enforcement, piece movement validation, and a working two-player GUI built with Java Swing. A clean OOP implementation of classical game logic.',
    tags: ['Java', 'Maven', 'Java Swing'],
    githubUrl: 'https://github.com/RoPeak/Chess-AI',
    screenshot: '/assets/images/projects/chess-ai-preview.png',
    featured: false,
    tier: 2,
    order: 8,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);
export const allProjects = projects.sort((a, b) => a.order - b.order);
