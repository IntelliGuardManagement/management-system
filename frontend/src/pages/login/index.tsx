import { Form, Input, Button, Card, message, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/store'
import type { LoginParams } from '@/types'
// import { post } from '@/services'  // 后续对接登录 API 时启用

const { Title } = Typography

export default function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const setToken = useAuthStore((state) => state.setToken)
  const setUser = useAuthStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (values: LoginParams) => {
    setLoading(true)
    try {
      // TODO: 对接后端登录 API
      // const res = await post<LoginResult>('/auth/login', values)
      // setToken(res.accessToken)
      // setUser(res.user)

      // Demo: 模拟登录成功
      setToken('demo-token')
      setUser({
        id: 1,
        username: values.username,
        nickname: '管理员',
        role: 'admin',
        permissions: ['*'],
      })

      message.success(t('login.success'))
      navigate('/dashboard', { replace: true })
    } catch {
      message.error(t('login.failed'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
      }}
    >
      <Card style={{ width: 400, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={3}>{t('app.name')}</Title>
          <Title level={5} type="secondary">
            {t('app.description')}
          </Title>
        </div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: t('login.usernamePlaceholder') }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('login.usernamePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: t('login.passwordPlaceholder') }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('login.passwordPlaceholder')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {loading ? t('login.submitting') : t('login.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
