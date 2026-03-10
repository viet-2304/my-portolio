export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const applyTheme = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }

  const toggleTheme = (event?: MouseEvent) => {
    const doc = document as any
    if (!doc.startViewTransition) {
      applyTheme()
      return
    }

    const x = event?.clientX ?? window.innerWidth / 2
    const y = event?.clientY ?? 0
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    document.documentElement.style.setProperty('--theme-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-y', `${y}px`)
    document.documentElement.style.setProperty('--theme-r', `${maxRadius}px`)

    doc.startViewTransition(applyTheme)
  }

  const themeIcon = computed(() => isDark.value ? 'mdi:weather-sunny' : 'mdi:weather-night')
  const themeLabel = computed(() => isDark.value ? 'Switch to light mode' : 'Switch to dark mode')

  return {
    isDark,
    toggleTheme,
    themeIcon,
    themeLabel,
  }
}
