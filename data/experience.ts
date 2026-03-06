export interface Experience {
  id: string
  company: string
  companyLogo?: string
  companyUrl?: string
  role: string
  startDate: string
  endDate: string | 'Present'
  location: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    companyUrl: 'https://example.com',
    role: 'Senior Frontend Developer',
    startDate: 'Jan 2024',
    endDate: 'Present',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Led frontend architecture migration from Vue 2 to Vue 3 + Nuxt 3',
      'Improved page load performance by 40% through code splitting and lazy loading',
      'Mentored 3 junior developers and established coding standards',
    ],
  },
  {
    id: 'exp-2',
    company: 'Startup Inc.',
    companyUrl: 'https://example.com',
    role: 'Fullstack Developer',
    startDate: 'Jun 2022',
    endDate: 'Dec 2023',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Built and maintained 5+ client-facing web applications using Vue.js and Node.js',
      'Designed and implemented RESTful APIs serving 10k+ daily active users',
      'Integrated third-party payment gateways and OAuth authentication',
    ],
  },
  {
    id: 'exp-3',
    company: 'Agency Studio',
    companyUrl: 'https://example.com',
    role: 'Junior Web Developer',
    startDate: 'Mar 2021',
    endDate: 'May 2022',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Developed responsive websites for 10+ clients using HTML, CSS, and JavaScript',
      'Collaborated with designers to translate Figma mockups into pixel-perfect UIs',
    ],
  },
]
