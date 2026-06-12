import { useAuthStore } from '@/store'
import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
