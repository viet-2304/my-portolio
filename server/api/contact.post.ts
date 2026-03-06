export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, subject, message } = body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required',
    })
  }

  // TODO: Replace with your preferred email service
  // Options: Formspree, Resend, SendGrid, Nodemailer
  //
  // Example with Formspree:
  // await $fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   body: { name, email, subject, message },
  // })

  console.log('Contact form submission:', { name, email, subject, message })

  return { success: true, message: 'Message sent successfully' }
})
