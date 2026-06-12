import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, App as AntApp } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { RouterProvider } from 'react-router-dom'
import { useAppStore } from '@/store'
import router from '@/router'
import '@/locales'
import './index.css'

const themeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
  },
}

const localeMap: Record<string, typeof zhCN> = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

function Main() {
  const locale = useAppStore((state) => state.locale)

  return (
    <ConfigProvider theme={themeConfig} locale={localeMap[locale]}>
      <AntApp>
        <RouterProvider router={router} />
      </AntApp>
    </ConfigProvider>
  )
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element not found. Make sure there is a <div id="root"> in index.html.')
}

createRoot(rootEl).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
