export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  responsibilities?: string[]
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
    title: 'Peraichi E-Commerce Platform',
    description: 'A web platform enabling users to create online seller websites with product management, payments, and e-commerce operations. Includes AI service for auto-generating landing pages and CRM system.',
    thumbnail: '/images/projects/peraichi.jpg',
    techStack: ['PHP', 'VueJS', 'Ruby', 'Redis', 'AWS', 'Claude Code', 'Gemini'],
    liveUrl: 'https://peraichi.co.jp/vn/',
    category: 'fullstack',
    featured: true,
    date: '2024',
  },
  {
    id: 'proj-2',
    title: 'AIHELLO - Amazon Seller Tools',
    description: 'A web platform designed to assist Amazon sellers in developing and managing products, including campaign and event management for individual listings.',
    thumbnail: '/images/projects/aihello.jpg',
    techStack: ['Angular 13+', 'RxJS', 'PrimeNG', 'Amazon Seller API'],
    liveUrl: 'https://www.aihello.com/',
    category: 'frontend',
    featured: true,
    date: '2023',
  },
  {
    id: 'proj-3',
    title: 'Trudi AI',
    description: 'A website to connect renters with homeowners. Features include core internal components, Storybook integration, and AI-powered voice response system.',
    thumbnail: '/images/projects/trudi.jpg',
    techStack: ['Angular 13', 'TypeScript', 'Storybook'],
    liveUrl: 'https://trudi.ai/',
    category: 'frontend',
    featured: true,
    date: '2023',
  },
  {
    id: 'proj-4',
    title: 'Easy Reporting',
    description: 'A website that allows users to report office issues such as machinery or equipment malfunction, with integrated database and reporting features.',
    thumbnail: '/images/projects/easyreporting.png',
    techStack: ['React', 'Java Spring Boot', 'MySQL'],
    category: 'fullstack',
    featured: false,
    date: '2022',
  },
]
