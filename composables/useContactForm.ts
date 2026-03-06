interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export const useContactForm = () => {
  const form = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = reactive<Partial<ContactForm>>({})
  const isSubmitting = ref(false)
  const isSubmitted = ref(false)

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const validate = (): boolean => {
    errors.name = form.name.trim() ? undefined : 'Name is required'
    errors.email = !form.email.trim()
      ? 'Email is required'
      : !validateEmail(form.email)
        ? 'Please enter a valid email'
        : undefined
    errors.subject = form.subject.trim() ? undefined : 'Subject is required'
    errors.message = form.message.trim() ? undefined : 'Message is required'

    return !errors.name && !errors.email && !errors.subject && !errors.message
  }

  const submitForm = async () => {
    if (!validate()) return

    isSubmitting.value = true
    try {
      // Replace with your Formspree endpoint or Nuxt server route
      await $fetch('/api/contact', {
        method: 'POST',
        body: { ...form },
      })
      isSubmitted.value = true
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
    }
    catch (error) {
      console.error('Failed to submit form:', error)
    }
    finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    Object.assign(errors, { name: undefined, email: undefined, subject: undefined, message: undefined })
    isSubmitted.value = false
  }

  return {
    form,
    errors,
    isSubmitting,
    isSubmitted,
    validate,
    submitForm,
    resetForm,
  }
}
