import { Typography, Card, Row, Col, Statistic } from 'antd'
import { UserOutlined, RiseOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '@/store'

const { Title } = Typography

export default function DashboardPage() {
  const { t } = useTranslation()
  const user = useAuthStore((state) => state.user)

  const stats = [
    {
      title: t('dashboard.stats.totalUsers'),
      value: 128,
      icon: <UserOutlined style={{ fontSize: 24, color: '#1677ff' }} />,
      color: '#e6f4ff',
    },
    {
      title: t('dashboard.stats.activeUsers'),
      value: 86,
      icon: <TeamOutlined style={{ fontSize: 24, color: '#52c41a' }} />,
      color: '#f6ffed',
    },
    {
      title: t('dashboard.stats.newToday'),
      value: 12,
      icon: <RiseOutlined style={{ fontSize: 24, color: '#fa8c16' }} />,
      color: '#fff7e6',
    },
    {
      title: t('dashboard.stats.systemHealth'),
      value: '98%',
      icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#13c2c2' }} />,
      color: '#e6fffb',
    },
  ]

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={4}>
          {t('dashboard.welcome')}，{user?.nickname || user?.username}！
        </Title>
      </div>

      <Row gutter={[16, 16]}>
        {stats.map((stat) => (
          <Col xs={24} sm={12} lg={6} key={stat.title}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: stat.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </div>
                <Statistic title={stat.title} value={stat.value} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card style={{ marginTop: 24 }}>
        <Title level={5}>{t('common.noData')}</Title>
        <Typography.Paragraph type="secondary">
          后续将展示更多统计图表和数据分析内容。
        </Typography.Paragraph>
      </Card>
    </div>
  )
}
