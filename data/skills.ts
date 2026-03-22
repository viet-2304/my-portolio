export interface Skill {
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Angular 13+', icon: 'logos:angular-icon', category: 'frontend' },
  { name: 'React.js', icon: 'logos:react', category: 'frontend' },
  { name: 'Vue.js', icon: 'logos:vue', category: 'frontend' },
  { name: 'NuxtJS', icon: 'logos:nuxt-icon', category: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend' },
  { name: 'RxJS', category: 'frontend' },
  { name: 'NGXS', category: 'frontend' },
  { name: 'PrimeNG', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
  { name: 'HTML5 / CSS3', icon: 'logos:html-5', category: 'frontend' },
  { name: 'Storybook', icon: 'logos:storybook-icon', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },

  // Backend
  { name: 'PHP', icon: 'logos:php', category: 'backend' },
  { name: 'Ruby', icon: 'logos:ruby', category: 'backend' },
  { name: 'Java Spring Boot', icon: 'logos:spring-icon', category: 'backend' },
  { name: 'RESTful APIs', icon: 'mdi:api', category: 'backend' },

  // Database
  { name: 'MySQL', icon: 'logos:mysql-icon', category: 'database' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
  { name: 'Redis', icon: 'logos:redis', category: 'database' },

  // Tools & AI
  { name: 'Claude Code', category: 'tools' },
  { name: 'MCP Module Dev', category: 'tools' },
  { name: 'Build Skill AI Agent', category: 'tools' },
  { name: 'Devin', category: 'tools' },
  { name: 'ChatGPT', category: 'tools' },
  { name: 'Gemini', category: 'tools' },
  { name: 'Adobe Express API', category: 'tools' },
  { name: 'AWS', icon: 'logos:aws', category: 'tools' },
  { name: 'CDN Integration', category: 'tools' },
  { name: 'Git / GitHub', icon: 'logos:git-icon', category: 'tools' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'tools' },
  { name: 'Agile / Scrum', category: 'tools' },
]

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: 'mdi:monitor-shimmer' },
  { key: 'backend', label: 'Backend', icon: 'mdi:code-tags' },
  { key: 'database', label: 'Database', icon: 'mdi:database-outline' },
  { key: 'tools', label: 'AI & Tools', icon: 'mdi:wrench-outline' },
] as const
