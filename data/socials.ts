export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export const socials: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/nemo',
    icon: 'mdi:github',
    label: 'GitHub Profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/nemo',
    icon: 'mdi:linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:viet.p2304@gmail.com',
    icon: 'mdi:email-outline',
    label: 'Send Email',
  },
]
