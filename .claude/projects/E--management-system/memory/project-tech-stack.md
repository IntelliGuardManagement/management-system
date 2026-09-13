---
name: project-tech-stack
description: "管理系统的技术栈和架构决策"
metadata:
  type: project
---

# 技术栈

## 前端
- React 19 + TypeScript + Vite 8
- Ant Design 6 (UI 组件库)
- React Router 7 (路由)
- Zustand 5 (状态管理)
- react-i18next (国际化)
- Axios (HTTP 客户端)

## 后端 (待搭建)
- NestJS + TypeScript
- Prisma ORM + MySQL
- JWT (Passport) 认证

## 目录结构
- 前端在 `frontend/`
- 后端在 `backend/`

**Why:** 前后端统一 TypeScript 语言，降低上下文切换成本。NestJS 的企业级架构（DI、模块化、Guards）天然适合管理系统。

**How to apply:** 新增前端页面在 `frontend/src/pages/` 下按模块建文件夹；新增 API 模块在 `backend/src/modules/` 下创建 NestJS 模块。
