export type Project = {
  id: string
  name: string
  description: string
  url?: string
  tags: string[]
  status: 'live' | 'upcoming' | 'closed'
}

export const projects: Project[] = [
  {
    id: 'EXP-001',
    name: 'What The Hell Should I Watch',
    description: 'Personality-driven movie decision engine. Built because scrolling Netflix for 40 minutes is not a hobby. Status: operational.',
    url: 'https://www.whatthehellshouldiwatch.com',
    tags: ['Next.js', 'TypeScript', 'TMDB API'],
    status: 'live',
  },
  {
    id: 'EXP-002',
    name: 'Project Phantom',
    description: 'AI-powered tool for a problem that technically already had a solution. Prototype developed during an avoidable weekend. Status: in development.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    status: 'upcoming',
  },
  {
    id: 'EXP-003',
    name: 'Project Mirage',
    description: 'Mobile-first experience for a problem nobody reported. Existence justified by curiosity alone. Status: pending clearance.',
    tags: ['React Native', 'Supabase', 'Stripe'],
    status: 'upcoming',
  },
  {
    id: 'EXP-004',
    name: 'Project Sundown',
    description: 'Had a good run. Decommissioned and transferred to another operator. Results: inconclusive.',
    tags: ['Node.js', 'PostgreSQL', 'Redis'],
    status: 'closed',
  },
]
