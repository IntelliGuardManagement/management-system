import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserInfo } from '@/types'

interface AuthState {
  token: string | null
  user: UserInfo | null
  setToken: (token: string | null) => void
  setUser: (user: UserInfo | null) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,

      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),

      logout: () => set({ token: null, user: null }),

      isAuthenticated: () => !!get().token,
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    },
  ),
)
