export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  proficiency: number // 0-100
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js / Nuxt', icon: 'logos:vue', category: 'frontend', proficiency: 90 },
  { name: 'JavaScript (ES6+)', icon: 'logos:javascript', category: 'frontend', proficiency: 90 },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', category: 'frontend', proficiency: 95 },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend', proficiency: 85 },
  { name: 'Angular', icon: 'logos:angular-icon', category: 'frontend', proficiency: 80 },
  { name: 'React', icon: 'logos:react', category: 'frontend', proficiency: 70 },

  // Backend
  { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend', proficiency: 80 },
  { name: 'Ruby', icon: 'logos:ruby', category: 'backend', proficiency: 75 },
  { name: 'PHP', icon: 'logos:php', category: 'backend', proficiency: 70 },
  { name: 'Java / Spring', icon: 'logos:java', category: 'backend', proficiency: 65 },

  // Database
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database', proficiency: 80 },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', category: 'database', proficiency: 75 },
  { name: 'Redis', icon: 'logos:redis', category: 'database', proficiency: 70 },
  { name: 'MySQL', icon: 'logos:mysql-icon', category: 'database', proficiency: 75 },

  // Tools
  { name: 'Docker & K8s', icon: 'logos:docker-icon', category: 'tools', proficiency: 70 },
  { name: 'Git / GitHub', icon: 'logos:git-icon', category: 'tools', proficiency: 90 },
  { name: 'AWS / Vercel', icon: 'logos:aws', category: 'tools', proficiency: 75 },
  { name: 'Linux', icon: 'logos:linux-tux', category: 'tools', proficiency: 75 },
]

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: 'mdi:monitor-shimmer', colorClass: 'progress-cyan' },
  { key: 'backend', label: 'Backend', icon: 'mdi:code-tags', colorClass: 'progress-purple' },
  { key: 'database', label: 'Database', icon: 'mdi:database-outline', colorClass: 'progress-teal' },
  { key: 'tools', label: 'Tools', icon: 'mdi:wrench-outline', colorClass: 'progress-cyan' },
] as const

export const techIcons = [
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Angular', icon: 'logos:angular-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
]
