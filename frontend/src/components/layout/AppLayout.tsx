import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, Button, Dropdown, theme } from 'antd'
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  TranslationOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useAppStore, useAuthStore } from '@/store'

const { Header, Sider, Content } = Layout

const menuItems = [
  {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: 'menu.dashboard',
  },
  {
    key: '/system',
    icon: <TeamOutlined />,
    label: 'menu.system',
    children: [
      {
        key: '/system/user',
        icon: <UserOutlined />,
        label: 'menu.user',
      },
      {
        key: '/system/role',
        icon: <TeamOutlined />,
        label: 'menu.role',
      },
    ],
  },
]

export default function AppLayout() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { sidebarCollapsed, toggleSidebar, locale, setLocale } = useAppStore()
  const { user, logout } = useAuthStore()
  const { token: themeToken } = theme.useToken()

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  const toggleLanguage = () => {
    const newLocale = locale === 'zh-CN' ? 'en-US' : 'zh-CN'
    setLocale(newLocale)
    i18n.changeLanguage(newLocale)
  }

  const userMenuItems = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: t('menu.logout'),
      onClick: () => {
        logout()
        navigate('/login')
      },
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={sidebarCollapsed}
        theme="light"
        style={{
          borderRight: `1px solid ${themeToken.colorBorderSecondary}`,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: sidebarCollapsed ? 16 : 20,
            color: themeToken.colorPrimary,
            borderBottom: `1px solid ${themeToken.colorBorderSecondary}`,
          }}
        >
          {sidebarCollapsed ? 'MS' : t('app.name')}
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={['/system']}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 24px',
            background: themeToken.colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${themeToken.colorBorderSecondary}`,
          }}
        >
          <Button
            type="text"
            icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button
              type="text"
              icon={<TranslationOutlined />}
              onClick={toggleLanguage}
            >
              {locale === 'zh-CN' ? 'EN' : '中文'}
            </Button>
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Button type="text" icon={<UserOutlined />}>
                {user?.nickname || user?.username || 'User'}
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: 24,
            padding: 24,
            background: themeToken.colorBgContainer,
            borderRadius: themeToken.borderRadius,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
