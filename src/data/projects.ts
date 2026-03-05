export type Project = {
  name: string
  description: string
  url?: string
  tags: string[]
  status: 'live' | 'upcoming' | 'closed'
}

export const projects: Project[] = [
  {
    name: 'What The Hell Should I Watch',
    description: 'A fast, personality-driven movie decision engine. Take a quick quiz or hit random — stop scrolling, get a movie, press play.',
    url: 'https://www.whatthehellshouldiwatch.com',
    tags: ['Next.js', 'TypeScript', 'TMDB API'],
    status: 'live',
  },
  {
    name: 'Project Phantom',
    description: 'An AI-powered tool that does something genuinely useful — if it works.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    status: 'upcoming',
  },
  {
    name: 'Project Mirage',
    description: 'A mobile-first experience for a problem nobody asked to be solved.',
    tags: ['React Native', 'Supabase', 'Stripe'],
    status: 'upcoming',
  },
  {
    name: 'Project Sundown',
    description: 'It had a good run. Someone else runs it now.',
    tags: ['Node.js', 'PostgreSQL', 'Redis'],
    status: 'closed',
  },
]
