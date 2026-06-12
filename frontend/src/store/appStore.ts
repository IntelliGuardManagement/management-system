import { create } from 'zustand'

interface AppState {
  sidebarCollapsed: boolean
  locale: 'zh-CN' | 'en-US'
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setLocale: (locale: 'zh-CN' | 'en-US') => void
}

export const useAppStore = create<AppState>()((set) => ({
  sidebarCollapsed: false,
  locale: 'zh-CN',

  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  setLocale: (locale) => set({ locale }),
}))
