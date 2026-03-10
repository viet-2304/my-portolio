# Changelog

Lich su cap nhat, chinh sua va theo doi cong viec cua du an Portfolio.

---

## [2026-03-10] - Chuyen Sidebar thanh Header Navigation

### Changed
- `AppHeader.vue`: Rewrite hoan toan — sidebar co dinh ben trai + mobile header -> mot header duy nhat o tren cung cho tat ca breakpoints
  - Desktop: logo trai, nav links giua, socials + ThemeToggle phai
  - Mobile: hamburger menu voi dropdown nav links + social icons
  - IntersectionObserver rootMargin dieu chinh cho top header (`-80px 0px -60% 0px`)
- `default.vue`: Loai bo sidebar margin logic va floating ThemeToggle, don gian chi con `pt-16`
- `main.css`: Them `scroll-padding-top: 5rem` de anchor scroll khong bi che boi fixed header

### Removed
- `composables/useSidebar.ts` — khong con can thiet khi bo sidebar

---

## [2026-03-07] - Docs & Config

### Added
- README.md voi huong dan setup, project structure, customization
- Them `.claude/` vao .gitignore

---

## [2026-03-05] - Khoi tao du an

### Added
- Khoi tao Nuxt 3 project voi Vue 3, TypeScript, TailwindCSS
- Cau truc component: `global/` (AppHeader, AppFooter, ThemeToggle), `home/` (Hero, About, Experience, Projects, Skills, Contact), `ui/` (SkillBadge, ProjectCard, TimelineItem, SectionHeading, StatCounter)
- Data layer: `projects.ts`, `skills.ts`, `experience.ts`, `socials.ts`
- Composables: `useTheme` (dark/light toggle), `useContactForm` (form state & validation)
- Server API: `contact.post.ts` (stub - chua tich hop email)
- Color mode voi `@nuxtjs/color-mode`
- Icon system voi `@nuxt/icon` + Iconify

---

## Backlog

### Chua lam
- [ ] Tich hop email service cho contact form (Resend / SendGrid / Formspree)
- [ ] SEO meta tags
- [ ] Responsive testing tren nhieu thiet bi
- [ ] Performance optimization (Lighthouse)
- [ ] Deploy len Vercel hoac Netlify
- [ ] Animation / transition cho cac section
- [ ] Blog section (neu can)
