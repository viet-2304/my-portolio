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
    company: 'Peraichi',
    companyUrl: 'https://peraichi.co.jp/vn/',
    role: 'Fullstack Developer',
    startDate: 'Present',
    endDate: 'Present',
    location: 'Vietnam',
    highlights: [
      'Analyzed user requirements, defined solutions and planned implementation',
      'Built AI service to support users creating Landing Pages',
      'Developed System CRM and MCP module',
      'Maintained and investigated production issues',
    ],
  },
  {
    id: 'exp-2',
    company: 'AIHELLO',
    companyUrl: 'https://www.aihello.com/',
    role: 'Fullstack Developer',
    startDate: 'Previous',
    endDate: 'Previous',
    location: 'Remote',
    highlights: [
      'Developed and maintained front-end applications using Angular',
      'Integrated Amazon Seller API to connect sellers with the platform',
      'Built subscription page with price analysis, sales tracking, and ad management',
      'Conducted code reviews, managed tasks, and assigned tickets to the front-end team',
      'Acted as solution architect, designing scalable and maintainable solutions',
    ],
  },
  {
    id: 'exp-3',
    company: 'Trudi AI',
    companyUrl: 'https://trudi.ai/',
    role: 'Frontend Developer',
    startDate: 'Previous',
    endDate: 'Previous',
    location: 'Vietnam',
    highlights: [
      'Implemented requested features and functionality using Angular 13',
      'Created core module and Storybook for the project',
      'Built AI-powered voice response system',
      'Provided support to internship partners',
    ],
  },
  {
    id: 'exp-4',
    company: 'MGM Technology',
    role: 'Frontend Developer',
    startDate: 'Previous',
    endDate: 'Previous',
    location: 'Vietnam',
    highlights: [
      'Collaborated with BE team to create the database for Easy Reporting project',
      'Collaborated with FE team to develop and implement the website UI',
      'Built features for reporting machinery or equipment malfunction',
    ],
  },
]
