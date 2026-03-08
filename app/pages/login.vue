<template>
  <div class="w-full max-w-md">
    <UCard class="shadow-lg">
      <template #header>
        <div class="flex flex-col items-center gap-4">
          <img 
            src="/images/logo.png" 
            alt="Hot Stuff Dance" 
            class="h-16 w-auto object-contain"
          />
          <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
        </div>
      </template>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <UInput
            id="email"
            v-model="email"
            type="email"
            placeholder="your@email.com"
            size="lg"
            :color="emailError ? 'red' : 'gray'"
            :trailing-icon="emailError ? 'i-heroicons-exclamation-circle' : undefined"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <UInput
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            size="lg"
            :color="passwordError ? 'red' : 'gray'"
            :trailing-icon="passwordError ? 'i-heroicons-exclamation-circle' : undefined"
          />
        </div>

        <div class="flex items-center justify-between">
          <UCheckbox
            v-model="rememberMe"
            label="Remember me"
            size="sm"
          />
          <a 
            href="#" 
            class="text-sm text-primary-600 hover:text-primary-500 font-medium"
          >
            Forgot password?
          </a>
        </div>

        <UButton
          type="submit"
          size="lg"
          block
          :loading="isLoading"
        >
          Sign In
        </UButton>
      </form>

      <template #footer>
        <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? 
          <a href="#" class="text-primary-600 hover:text-primary-500 font-medium">
            Sign up
          </a>
        </p>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const emailError = ref(false)
const passwordError = ref(false)

const handleSubmit = () => {
  console.log('Login submitted', { email: email.value, rememberMe: rememberMe.value })
}
</script>
