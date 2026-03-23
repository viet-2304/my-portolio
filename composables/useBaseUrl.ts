export const useBaseUrl = () => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL || '/'

  const withBase = (path: string) => {
    if (!path) return path
    // Already has base or is external URL
    if (path.startsWith('http') || path.startsWith(baseURL)) return path
    // Remove leading slash and prepend baseURL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${baseURL}${cleanPath}`
  }

  return { withBase }
}
