import en from '~/locales/en.json'
import vi from '~/locales/vi.json'

type Messages = typeof en

const messages: Record<string, Messages> = { en, vi }

export const useLanguage = () => {
  const locale = useState<string>('locale', () => 'en')

  const isVN = computed(() => locale.value === 'vi')

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'vi' : 'en'
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let result: unknown = messages[locale.value]
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    return typeof result === 'string' ? result : key
  }

  const tm = (key: string): string[] => {
    const keys = key.split('.')
    let result: unknown = messages[locale.value]
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k]
      } else {
        return []
      }
    }
    return Array.isArray(result) ? result : []
  }

  return { locale, isVN, toggleLocale, t, tm }
}
