# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- **Management System** — 后台管理系统
- This is a fresh repository — no code yet. Update this file as the project grows.
- Repo: https://github.com/IntelliGuardManagement/management-system.git
- Working directory: `E:\management-system`

## Git Conventions

- Default branch: `main`
- Commit messages in Chinese or English, consistent with the project's bilingual nature

## Architecture

### 前端 (frontend/)

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建工具 | Vite 8 |
| UI 组件库 | Ant Design 6 |
| 路由 | React Router 7 |
| 状态管理 | Zustand 5 |
| 国际化 | react-i18next (zh-CN / en-US) |
| HTTP | Axios (拦截器 Token 注入 + 错误处理) |

```
frontend/src/
├── components/   # 公共组件 (common/, layout/)
├── hooks/        # 自定义 Hooks
├── locales/      # 国际化语言包
├── pages/        # 页面组件
├── router/       # 路由配置
├── services/     # API 请求层
├── store/        # 状态管理
├── types/        # 类型定义
└── utils/        # 工具函数
```

### 后端 (待搭建，推荐 NestJS + Prisma + MySQL)

- 后端目录: `backend/`
- 认证: JWT / Passport
- 数据库: MySQL with Prisma ORM

## When Adding Code

- Add CI/CD config (GitHub Actions `.github/workflows/`) alongside the first code
- Keep configuration files at the project root
- Use environment variables for environment-specific configuration
