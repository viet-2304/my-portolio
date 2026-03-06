export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const toggleTheme = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
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
