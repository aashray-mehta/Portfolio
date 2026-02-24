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
    description: 'TV and movie recommendations based on your mood.',
    url: 'https://watch.aashraymehta.com',
    tags: ['Astro', 'AI'],
    status: 'live',
  },
]
