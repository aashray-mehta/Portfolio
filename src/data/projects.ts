export type Project = {
  name: string
  description: string
  url: string
  tags: string[]
  status: 'live' | 'wip' | 'archived'
}

export const projects: Project[] = [
  {
    name: 'What The Hell Should I Watch',
    description: 'A fast, personality-driven movie decision engine. Take a quick quiz or hit random — stop scrolling, get a movie, press play.',
    url: 'https://www.whatthehellshouldiwatch.com',
    tags: ['Next.js', 'TypeScript', 'TMDB API'],
    status: 'live',
  },
]
