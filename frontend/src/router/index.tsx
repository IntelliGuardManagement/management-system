import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { PrivateRoute } from '@/components/common'
import LoginPage from '@/pages/login'
import DashboardPage from '@/pages/dashboard'
import NotFoundPage from '@/pages/404'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      // TODO: 后续添加更多页面路由
      // {
      //   path: 'system/user',
      //   element: <UserManagementPage />,
      // },
      // {
      //   path: 'system/role',
      //   element: <RoleManagementPage />,
      // },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
