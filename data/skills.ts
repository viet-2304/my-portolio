export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'logos:angular-icon', category: 'frontend' },
  { name: 'React', icon: 'logos:react', category: 'frontend' },
  { name: 'Vue.js', icon: 'logos:vue', category: 'frontend' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', category: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend' },
  { name: 'RxJS', icon: 'logos:reactivex', category: 'frontend' },
  { name: 'PrimeNG', icon: 'simple-icons:primeng', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
  { name: 'HTML5', icon: 'logos:html-5', category: 'frontend' },
  { name: 'CSS3', icon: 'logos:css-3', category: 'frontend' },
  { name: 'Storybook', icon: 'logos:storybook-icon', category: 'frontend' },

  // Backend
  { name: 'PHP', icon: 'logos:php', category: 'backend' },
  { name: 'Ruby', icon: 'logos:ruby', category: 'backend' },
  { name: 'Spring Boot', icon: 'logos:spring-icon', category: 'backend' },
  { name: 'REST API', icon: 'mdi:api', category: 'backend' },

  // Database
  { name: 'MySQL', icon: 'logos:mysql-icon', category: 'database' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
  { name: 'Redis', icon: 'logos:redis', category: 'database' },

  // Tools & AI
  { name: 'Claude', icon: 'simple-icons:anthropic', category: 'tools' },
  { name: 'ChatGPT', icon: 'simple-icons:openai', category: 'tools' },
  { name: 'Gemini', icon: 'simple-icons:googlegemini', category: 'tools' },
  { name: 'AWS', icon: 'logos:aws', category: 'tools' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'tools' },
  { name: 'Git', icon: 'logos:git-icon', category: 'tools' },
  { name: 'GitHub', icon: 'mdi:github', category: 'tools' },
  { name: 'Agile', icon: 'mdi:account-group-outline', category: 'tools' },
]

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: 'mdi:monitor-shimmer' },
  { key: 'backend', label: 'Backend', icon: 'mdi:code-tags' },
  { key: 'database', label: 'Database', icon: 'mdi:database-outline' },
  { key: 'tools', label: 'AI & Tools', icon: 'mdi:wrench-outline' },
] as const
