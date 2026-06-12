# Frontend - 管理后台前端

基于 React 19 + TypeScript + Vite 8 搭建的企业级后台管理系统前端。

## 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | React 19 + TypeScript | |
| 构建工具 | Vite 8 | 快速的开发构建 |
| UI 组件库 | Ant Design 6 | 企业级组件库 |
| 路由 | React Router 7 | 支持懒加载和嵌套路由 |
| 状态管理 | Zustand 5 | 轻量、类型安全 |
| 国际化 | react-i18next | 中英文支持 |
| HTTP 客户端 | Axios | 请求/响应拦截器 |
| 日期处理 | dayjs | 轻量日期库 |

## 目录结构

```
src/
├── components/     # 公共组件
│   ├── common/     # 通用组件(路由守卫等)
│   └── layout/     # 布局组件(侧栏/顶栏)
├── hooks/          # 自定义 Hooks
├── locales/        # 国际化语言包
│   ├── zh-CN/      # 中文
│   └── en-US/      # 英文
├── pages/          # 页面组件
│   ├── dashboard/  # 仪表盘
│   └── login/      # 登录页
├── router/         # 路由配置
├── services/       # API 请求层
├── store/          # 状态管理
├── types/          # TypeScript 类型定义
├── utils/          # 工具函数
├── main.tsx        # 应用入口
└── index.css       # 全局样式
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 代码检查
npm run lint
```

## 环境要求

- Node.js >= 18
- npm >= 9

## 开发代理

Vite 配置了 `/api` 代理到 `http://localhost:3000`，开发时后端 API 请求无需处理跨域。
