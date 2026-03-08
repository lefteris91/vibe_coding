import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  username: string
  displayName: string
  firstName: string
  lastName: string
  avatar?: string
  bio?: string
  role: 'subscriber' | 'basic' | 'premium'
}

interface UserProfile {
  displayName: string
  firstName: string
  lastName: string
  bio: string
  avatar: string
}

interface OrderItem {
  id: number
  name: string
  productId: number
  quantity: number
  price: number
}

interface Order {
  id: number
  orderNumber: string
  date: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
  total: number
  currency: string
  items: OrderItem[]
}

interface SubscriptionPlan {
  id: number
  name: string
  description: string
  price: number
  billingPeriod: 'monthly' | 'yearly'
  features: string[]
}

interface Subscription {
  id: number
  planId: number
  plan: SubscriptionPlan
  status: 'active' | 'cancelled' | 'expired' | 'pending'
  startDate: string
  nextBillingDate: string
  amount: number
  level: 'free' | 'basic' | 'premium'
}

interface VideoReview {
  id: number
  videoId: number
  videoTitle: string
  status: 'pending' | 'in_review' | 'completed'
  submittedAt: string
  feedback?: string
  instructor?: string
}

interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const profile = ref<UserProfile>({
    displayName: '',
    firstName: '',
    lastName: '',
    bio: '',
    avatar: ''
  })

  const orders = ref<Order[]>([])
  const subscription = ref<Subscription | null>(null)
  const availablePlans = ref<SubscriptionPlan[]>([])
  const reviews = ref<VideoReview[]>([])

  const login = async (_credentials: LoginCredentials) => {
    isLoading.value = true
    error.value = null
    
    try {
      // TODO: Implement API call
      // const config = useRuntimeConfig()
      // const { data } = await useFetch(`${config.public.wpApiUrl}/jwt-auth/v1/token`, {
      //   method: 'POST',
      //   body: _credentials
      // })
      
      // Dummy data for now
      user.value = {
        id: 1,
        email: 'demo@hotstuffdance.com',
        username: 'demo_user',
        displayName: 'Demo User',
        firstName: 'Demo',
        lastName: 'User',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
        bio: 'Dance enthusiast!',
        role: 'premium'
      }
      token.value = 'dummy_jwt_token_12345'
      
      await fetchProfile()
      await fetchOrders()
      await fetchSubscription()
      await fetchReviews()
    } catch (e) {
      error.value = 'Login failed. Please check your credentials.'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    profile.value = { displayName: '', firstName: '', lastName: '', bio: '', avatar: '' }
    orders.value = []
    subscription.value = null
    reviews.value = []
  }

  const checkAuth = async () => {
    // TODO: Implement token validation from cookie
    // const cookie = useCookie('auth_token')
    // if (cookie.value) {
    //   token.value = cookie.value
    //   await fetchProfile()
    // }
  }

  const fetchProfile = async () => {
    // TODO: Implement API call
    // const config = useRuntimeConfig()
    // const { data } = await useFetch(`${config.public.wpApiUrl}/wp/v2/users/me`, {
    //   headers: { Authorization: `Bearer ${token.value}` }
    // })
    
    if (user.value) {
      profile.value = {
        displayName: user.value.displayName,
        firstName: user.value.firstName,
        lastName: user.value.lastName,
        bio: user.value.bio || '',
        avatar: user.value.avatar || ''
      }
    }
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    isLoading.value = true
    try {
      // TODO: Implement API call
      // const config = useRuntimeConfig()
      // await useFetch(`${config.public.wpApiUrl}/wp/v2/users/me`, {
      //   method: 'POST',
      //   headers: { Authorization: `Bearer ${token.value}` },
      //   body: data
      // })
      
      profile.value = { ...profile.value, ...data }
    } catch (e) {
      error.value = 'Failed to update profile'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const fetchOrders = async () => {
    // TODO: Implement API call
    // const config = useRuntimeConfig()
    // const { data } = await useFetch(`${config.public.wpApiUrl}/wc/v3/orders`, {
    //   headers: { Authorization: `Bearer ${token.value}` }
    // })
    
    orders.value = [
      {
        id: 1,
        orderNumber: 'HSD-1234',
        date: '2024-01-15T10:30:00Z',
        status: 'completed',
        total: 24.90,
        currency: 'EUR',
        items: [
          { id: 1, name: 'Hip Hop Choreography Vol. 1', productId: 101, quantity: 1, price: 24.90 }
        ]
      },
      {
        id: 2,
        orderNumber: 'HSD-1235',
        date: '2024-02-20T14:45:00Z',
        status: 'completed',
        total: 36.90,
        currency: 'EUR',
        items: [
          { id: 2, name: 'Premium Membership - Monthly', productId: 201, quantity: 1, price: 36.90 }
        ]
      }
    ]
  }

  const fetchSubscription = async () => {
    // TODO: Implement API call
    // const config = useRuntimeConfig()
    // const { data } = await useFetch(`${config.public.wpApiUrl}/pmpro/v1/membership_level`, {
    //   headers: { Authorization: `Bearer ${token.value}` }
    // })
    
    subscription.value = {
      id: 1,
      planId: 2,
      plan: {
        id: 2,
        name: 'Premium',
        description: 'Full access plus video feedback',
        price: 36.90,
        billingPeriod: 'monthly',
        features: ['All videos', 'HD quality', 'Video feedback', 'Priority support']
      },
      status: 'active',
      startDate: '2024-02-20T00:00:00Z',
      nextBillingDate: '2024-03-20T00:00:00Z',
      amount: 36.90,
      level: 'premium'
    }

    availablePlans.value = [
      {
        id: 1,
        name: 'Basic',
        description: 'Access to all dance videos',
        price: 18.90,
        billingPeriod: 'monthly',
        features: ['All videos', 'SD quality', 'Community forum']
      },
      {
        id: 2,
        name: 'Premium',
        description: 'Full access plus video feedback',
        price: 36.90,
        billingPeriod: 'monthly',
        features: ['All videos', 'HD quality', 'Video feedback', 'Priority support']
      },
      {
        id: 3,
        name: 'Basic Yearly',
        description: 'Access to all dance videos - yearly',
        price: 189.00,
        billingPeriod: 'yearly',
        features: ['All videos', 'SD quality', 'Community forum', '2 months free']
      },
      {
        id: 4,
        name: 'Premium Yearly',
        description: 'Full access plus video feedback - yearly',
        price: 369.00,
        billingPeriod: 'yearly',
        features: ['All videos', 'HD quality', 'Video feedback', 'Priority support', '3 months free']
      }
    ]
  }

  const cancelSubscription = async () => {
    isLoading.value = true
    try {
      // TODO: Implement API call
      // const config = useRuntimeConfig()
      // await useFetch(`${config.public.wpApiUrl}/pmpro/v1/cancel`, {
      //   method: 'POST',
      //   headers: { Authorization: `Bearer ${token.value}` }
      // })
      
      if (subscription.value) {
        subscription.value.status = 'cancelled'
      }
    } catch (e) {
      error.value = 'Failed to cancel subscription'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const fetchReviews = async () => {
    // TODO: Implement API call
    // const config = useRuntimeConfig()
    // const { data } = await useFetch(`${config.public.wpApiUrl}/jet-engine/v2/reviews`, {
    //   headers: { Authorization: `Bearer ${token.value}` }
    // })
    
    reviews.value = [
      {
        id: 1,
        videoId: 101,
        videoTitle: 'Hip Hop Basics #1',
        status: 'completed',
        submittedAt: '2024-01-20T10:00:00Z',
        feedback: 'Great energy! Work on keeping your shoulders relaxed during the isolations.',
        instructor: 'Sarah'
      },
      {
        id: 2,
        videoId: 102,
        videoTitle: 'Contemporary Flow',
        status: 'in_review',
        submittedAt: '2024-02-15T15:30:00Z'
      }
    ]
  }

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    profile,
    orders,
    subscription,
    availablePlans,
    reviews,
    login,
    logout,
    checkAuth,
    fetchProfile,
    updateProfile,
    fetchOrders,
    fetchSubscription,
    cancelSubscription,
    fetchReviews
  }
})
