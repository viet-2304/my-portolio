export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'learning'
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js', icon: 'logos:vue', category: 'frontend', proficiency: 'advanced' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', category: 'frontend', proficiency: 'advanced' },
  { name: 'React', icon: 'logos:react', category: 'frontend', proficiency: 'intermediate' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend', proficiency: 'advanced' },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', category: 'frontend', proficiency: 'expert' },
  { name: 'HTML/CSS', icon: 'logos:html-5', category: 'frontend', proficiency: 'expert' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend', proficiency: 'expert' },

  // Backend
  { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend', proficiency: 'advanced' },
  { name: 'Express', icon: 'simple-icons:express', category: 'backend', proficiency: 'advanced' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'backend', proficiency: 'intermediate' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', category: 'backend', proficiency: 'intermediate' },
  { name: 'REST APIs', icon: 'mdi:api', category: 'backend', proficiency: 'advanced' },

  // DevOps & Tools
  { name: 'Git', icon: 'logos:git-icon', category: 'devops', proficiency: 'advanced' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'devops', proficiency: 'intermediate' },
  { name: 'Linux', icon: 'logos:linux-tux', category: 'devops', proficiency: 'intermediate' },
  { name: 'Vercel', icon: 'logos:vercel-icon', category: 'devops', proficiency: 'advanced' },

  // Tools
  { name: 'VS Code', icon: 'logos:visual-studio-code', category: 'tools', proficiency: 'expert' },
  { name: 'Figma', icon: 'logos:figma', category: 'tools', proficiency: 'intermediate' },

  // Currently Learning
  { name: 'Rust', icon: 'logos:rust', category: 'learning' },
  { name: 'Go', icon: 'logos:go', category: 'learning' },
]

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: 'mdi:monitor' },
  { key: 'backend', label: 'Backend', icon: 'mdi:server' },
  { key: 'devops', label: 'DevOps', icon: 'mdi:cloud-outline' },
  { key: 'tools', label: 'Tools', icon: 'mdi:wrench' },
  { key: 'learning', label: 'Currently Learning', icon: 'mdi:book-open-variant' },
] as const
