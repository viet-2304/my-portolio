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
    company: 'Peraichi Vietnam',
    companyUrl: 'https://peraichi.co.jp/vn/',
    role: 'Full Stack Developer',
    startDate: '02/2025',
    endDate: 'Present',
    location: 'Da Nang, Vietnam',
    highlights: [
      'Analyzed user requirements and defined solutions for CRM system development',
      'Built AI-powered landing page generator using Claude Code and Gemini',
      'Developed MCP (Model Context Protocol) modules to extend AI service capabilities',
      'Integrated third-party APIs including Fincode, Adobe Express, Fullstar, and CDN services',
      'Investigated and resolved production caching issues with CDN optimization',
      'Collaborated with cross-functional teams using Agile/Scrum',
    ],
  },
  {
    id: 'exp-2',
    company: 'AIHELLO',
    companyUrl: 'https://www.aihello.com/',
    role: 'Frontend Developer',
    startDate: '08/2022',
    endDate: '11/2024',
    location: 'Remote',
    highlights: [
      'Led a front-end team of 2 developers — conducted code reviews and managed tasks',
      'Acted as solution architect, designing scalable application structures',
      'Integrated Amazon Seller API for real-time product and sales data sync',
      'Built SmartView, Repricing engine, Campaign Creator, Budget management modules',
      'Developed subscription page with price analysis and ad management dashboards',
      'Translated complex business requirements into technical specifications',
      'Proposed feature enhancements that increased platform usability',
    ],
  },
  {
    id: 'exp-3',
    company: 'Trudi AI',
    companyUrl: 'https://trudi.ai/',
    role: 'Frontend Developer',
    startDate: '12/2024',
    endDate: '01/2025',
    location: 'Da Nang, Vietnam',
    highlights: [
      'Implemented features and functionality using Angular 13',
      'Created core module and Storybook for the project',
      'Built AI-powered voice response system',
      'Provided support to internship partners',
    ],
  },
  {
    id: 'exp-4',
    company: 'MGM Technology',
    role: 'Frontend Developer Intern',
    startDate: '2022',
    endDate: '2022',
    location: 'Vietnam',
    highlights: [
      'Collaborated with BE team to create the database for Easy Reporting project',
      'Collaborated with FE team to develop and implement the website UI',
      'Built features for reporting machinery or equipment malfunction',
    ],
  },
]
