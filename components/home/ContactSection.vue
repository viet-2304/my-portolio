<script setup lang="ts">
import { socials } from '~/data/socials'

const { form, errors, isSubmitting, isSubmitted, submitForm, resetForm } = useContactForm()
</script>

<template>
  <section id="contact" class="section-padding bg-slate-50 dark:bg-slate-900/50">
    <div class="container-content">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or want to chat? Feel free to reach out!"
      />

      <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <!-- Contact Form -->
        <div>
          <!-- Success Message -->
          <div v-if="isSubmitted" class="card text-center py-12">
            <Icon name="mdi:check-circle" size="48" class="text-green-500 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Message Sent!
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mb-6">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button class="btn-outline" @click="resetForm">
              Send Another Message
            </button>
          </div>

          <!-- Form -->
          <form v-else class="space-y-5" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                class="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
              >
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
              >
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="What's this about?"
                class="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
              >
              <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none text-slate-900 dark:text-white"
              />
              <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full justify-center"
            >
              <Icon v-if="isSubmitting" name="mdi:loading" size="18" class="animate-spin" />
              <Icon v-else name="mdi:send" size="18" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="font-semibold text-slate-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div class="space-y-4">
              <a
                href="mailto:viet.p2304@gmail.com"
                class="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                <div class="p-2.5 bg-blue-600/10 rounded-lg">
                  <Icon name="mdi:email-outline" size="20" class="text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p class="font-medium">viet.p2304@gmail.com</p>
                </div>
              </a>

              <div class="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div class="p-2.5 bg-blue-600/10 rounded-lg">
                  <Icon name="mdi:map-marker-outline" size="20" class="text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p class="font-medium">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="card">
            <h3 class="font-semibold text-slate-900 dark:text-white mb-4">
              Find Me Online
            </h3>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.platform"
                :href="social.url"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Icon :name="social.icon" size="22" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
