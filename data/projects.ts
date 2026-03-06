export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  thumbnail: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'frontend' | 'fullstack' | 'open-source' | 'other'
  featured: boolean
  date: string
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    thumbnail: '/images/projects/ecommerce.png',
    techStack: ['Vue 3', 'Nuxt 3', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/nemo/ecommerce',
    category: 'fullstack',
    featured: true,
    date: '2025-08',
  },
  {
    id: 'proj-2',
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop, real-time collaboration, and team workspaces.',
    thumbnail: '/images/projects/taskmanager.png',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/nemo/taskmanager',
    category: 'frontend',
    featured: true,
    date: '2025-05',
  },
  {
    id: 'proj-3',
    title: 'React Auth UI',
    description: 'A polished login/register UI boilerplate with Redux Toolkit, password strength meter, and responsive design.',
    thumbnail: '/images/projects/authui.png',
    techStack: ['React 18', 'Redux Toolkit', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/nemo/react-auth-ui',
    category: 'frontend',
    featured: false,
    date: '2026-03',
  },
  {
    id: 'proj-4',
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard with location search, 7-day forecast, and interactive charts.',
    thumbnail: '/images/projects/weather.png',
    techStack: ['Vue 3', 'Chart.js', 'OpenWeather API', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/nemo/weather',
    category: 'frontend',
    featured: true,
    date: '2024-11',
  },
]
