<template>
  <div class="w-full max-w-lg">
    <UCard class="shadow-xl bg-black/80 backdrop-blur-sm border border-pink-500/30">
      <template #header>
        <div class="flex flex-col items-center gap-4 pt-4">
          <img 
            src="/images/logo.png" 
            alt="Hot Stuff Dance" 
            class="h-20 w-auto object-contain"
          />
          <h1 class="text-2xl font-bold text-white">
            Welcome Back
          </h1>
        </div>
      </template>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-gray-300">
            Email
          </label>
          <UInput
            id="email"
            v-model="email"
            type="email"
            placeholder="your@email.com"
            size="lg"
            color="pink"
            variant="outline"
            :ui="{
              base: 'bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500'
            }"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-gray-300">
            Password
          </label>
          <UInput
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            size="lg"
            color="pink"
            variant="outline"
            :ui="{
              base: 'bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500'
            }"
          />
        </div>

        <div class="flex items-center justify-between">
          <UCheckbox
            v-model="rememberMe"
            label="Remember me"
            size="sm"
            color="pink"
            :ui="{
              label: 'text-gray-300'
            }"
          />
          <a 
            href="#" 
            class="text-sm text-pink-400 hover:text-pink-300 font-medium"
          >
            Forgot password?
          </a>
        </div>

        <UButton
          type="submit"
          size="lg"
          block
          color="pink"
          class="bg-pink-600 hover:bg-pink-700"
          :loading="isLoading"
        >
          Sign In
        </UButton>
      </form>

      <template #footer>
        <p class="text-center text-sm text-gray-400">
          Don't have an account? 
          <a href="#" class="text-pink-400 hover:text-pink-300 font-medium">
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
