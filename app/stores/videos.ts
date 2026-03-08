import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Video {
  id: number
  title: string
  slug: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: number
  instructor: string
  category: 'choreography' | 'warm-up' | 'stretching' | 'workout'
  level: 'beginner' | 'intermediate' | 'advanced'
  createdAt: string
}

interface VideoFilters {
  search: string
  category: string | null
  level: string | null
}

export const useVideosStore = defineStore('videos', () => {
  const videos = ref<Video[]>([])
  const currentVideo = ref<Video | null>(null)
  const filters = ref<VideoFilters>({
    search: '',
    category: null,
    level: null
  })
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const filteredVideos = computed(() => {
    let result = videos.value

    if (filters.value.search) {
      const searchLower = filters.value.search.toLowerCase()
      result = result.filter(v => 
        v.title.toLowerCase().includes(searchLower) ||
        v.description.toLowerCase().includes(searchLower) ||
        v.instructor.toLowerCase().includes(searchLower)
      )
    }

    if (filters.value.category) {
      result = result.filter(v => v.category === filters.value.category)
    }

    if (filters.value.level) {
      result = result.filter(v => v.level === filters.value.level)
    }

    return result
  })

  const fetchVideos = async () => {
    isLoading.value = true
    error.value = null

    try {
      // TODO: Implement API call
      // const config = useRuntimeConfig()
      // const userStore = useUserStore()
      // const { data } = await useFetch(`${config.public.wpApiUrl}/wp/v2/videos`, {
      //   headers: { Authorization: `Bearer ${userStore.token}` }
      // })
      
      videos.value = [
        {
          id: 1,
          title: 'Hip Hop Fundamentals Vol. 1',
          slug: 'hip-hop-fundamentals-vol-1',
          description: 'Learn the basics of hip hop dancing including pops, locks, and basic footwork. Perfect for beginners!',
          thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 1845,
          instructor: 'Marcus',
          category: 'choreography',
          level: 'beginner',
          createdAt: '2024-01-10T00:00:00Z'
        },
        {
          id: 2,
          title: 'Contemporary Dance Flow',
          slug: 'contemporary-dance-flow',
          description: 'A smooth contemporary routine focusing on flow, expression, and fluid movements.',
          thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 2430,
          instructor: 'Elena',
          category: 'choreography',
          level: 'intermediate',
          createdAt: '2024-01-15T00:00:00Z'
        },
        {
          id: 3,
          title: 'Morning Warm-Up Routine',
          slug: 'morning-warm-up-routine',
          description: 'Start your day right with this 15-minute warm-up to get your body ready for dancing.',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 900,
          instructor: 'Sarah',
          category: 'warm-up',
          level: 'beginner',
          createdAt: '2024-01-20T00:00:00Z'
        },
        {
          id: 4,
          title: 'Full Body Stretching',
          slug: 'full-body-stretching',
          description: 'Complete stretching routine for dancers. Improve flexibility and prevent injuries.',
          thumbnail: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 1200,
          instructor: 'Elena',
          category: 'stretching',
          level: 'beginner',
          createdAt: '2024-01-25T00:00:00Z'
        },
        {
          id: 5,
          title: 'High Energy Cardio Dance',
          slug: 'high-energy-cardio-dance',
          description: 'Burn calories with this high-energy cardio dance workout. No dance experience needed!',
          thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 1800,
          instructor: 'Marcus',
          category: 'workout',
          level: 'intermediate',
          createdAt: '2024-02-01T00:00:00Z'
        },
        {
          id: 6,
          title: 'Advanced Jazz Technique',
          slug: 'advanced-jazz-technique',
          description: 'Master jazz technique with this advanced choreography featuring turns, kicks, and jumps.',
          thumbnail: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 3200,
          instructor: 'Sarah',
          category: 'choreography',
          level: 'advanced',
          createdAt: '2024-02-05T00:00:00Z'
        },
        {
          id: 7,
          title: 'Core Strengthening for Dancers',
          slug: 'core-strengthening-for-dancers',
          description: 'Build core strength essential for all dance styles with this targeted workout.',
          thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 1500,
          instructor: 'Marcus',
          category: 'workout',
          level: 'intermediate',
          createdAt: '2024-02-10T00:00:00Z'
        },
        {
          id: 8,
          title: 'Cool Down & Recovery',
          slug: 'cool-down-recovery',
          description: 'Essential cool down routine to help your body recover after intense dancing.',
          thumbnail: 'https://images.unsplash.com/photo-1609899464726-209befb4e8ac?w=400&h=225&fit=crop',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          duration: 600,
          instructor: 'Elena',
          category: 'stretching',
          level: 'beginner',
          createdAt: '2024-02-15T00:00:00Z'
        }
      ]
    } catch (e) {
      error.value = 'Failed to load videos'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const getVideoById = (id: number): Video | undefined => {
    return videos.value.find(v => v.id === id)
  }

  const setCurrentVideo = (id: number) => {
    currentVideo.value = getVideoById(id) || null
  }

  const setFilter = (key: keyof VideoFilters, value: string) => {
    if (key === 'category' || key === 'level') {
      filters.value[key] = value || null
    } else {
      filters.value[key] = value
    }
  }

  const clearFilters = () => {
    filters.value = {
      search: '',
      category: null,
      level: null
    }
  }

  return {
    videos,
    currentVideo,
    filters,
    isLoading,
    error,
    filteredVideos,
    fetchVideos,
    getVideoById,
    setCurrentVideo,
    setFilter,
    clearFilters
  }
})
