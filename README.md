# Nemo Portfolio

Personal portfolio website built with Nuxt 3, Vue 3, TypeScript, and TailwindCSS.

## Tech Stack

- **Framework:** Nuxt 3 + Vue 3
- **Styling:** TailwindCSS + `@nuxtjs/color-mode` (dark/light theme)
- **Icons:** `@nuxt/icon` (Iconify)
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Static site generation
npm run generate

# Preview production build
npm run preview
```

## Project Structure

```
├── components/
│   ├── global/       # AppHeader, AppFooter, ThemeToggle
│   ├── home/         # Page sections (Hero, About, Experience, Projects, Skills, Contact)
│   └── ui/           # Reusable primitives (SkillBadge, ProjectCard, etc.)
├── composables/
│   ├── useTheme.ts
│   └── useContactForm.ts
├── data/             # Portfolio content (projects, skills, experience, socials)
├── pages/
│   └── index.vue     # Single-page entry point
└── server/
    └── api/
        └── contact.post.ts   # Contact form API handler
```

## Customization

All portfolio content lives in the `data/` directory as typed TypeScript exports. Edit these files to update your projects, skills, and experience:

- `data/projects.ts`
- `data/skills.ts`
- `data/experience.ts`
- `data/socials.ts`

## Contact Form

The contact form API (`server/api/contact.post.ts`) is ready to integrate with email services like Resend, SendGrid, Formspree, or Nodemailer.
