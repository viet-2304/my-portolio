import profileData from '~/data/profile.json'

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  email: string
  phone?: string
  location: string
  avatar: string
  resumeUrl: string
  about: {
    bio: string[]
    stats: { value: number; label: string; suffix: string }[]
    techIcons: { name: string; icon: string }[]
  }
  education: {
    school: string
    major: string
    startDate: string
    endDate: string
  }
  certifications: { name: string; score: string; icon: string; url?: string }[]
  socials: SocialLink[]
}

export const useProfile = () => {
  return profileData as Profile
}
