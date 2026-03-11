# 透過 pnpm dlx shadcn@latest init --monorepo + Turborepo 建置的理由

- Design System / 共用 UI 元件庫
> 多個產品線（官網、後台、管理系統、客戶 dashboard）要共用同一套按鈕、表單、表格。
> → packages/ui 就是中央元件庫，所有 app 都從 @workspace/ui import，改一次全站更新。
- 專案規模會成長（中大型團隊）
> 一開始：只有 apps/web（主要產品網站），後來加：apps/admin（後台管理系統），可能還加：apps/marketing（行銷落地頁

- 現代 monorepo 架構
```
pnpm dlx shadcn@latest init --monorepo
1. 產生 pnpm-workspace.yaml，建立 pnpm workspaces 結構，支援模組開發，apps/*：放不同應用（例如 web、admin、mobile），packages/*：放共用模組（例如 UI library、utils、config）。
2. workspace linking，使用 workspace:* 版本號，讓內部套件像 npm 套件一樣被引用，例如 @workspace/ui 可以被 apps/web 直接 import，而不需要發佈到 npm registry。
```
- 團隊多人協作 + Vercel 部署
> Turborepo 解決 開發與建置效率 的問題，Vercel 解決 部署與交付 的問題。
> Turborepo 是「在地端與 CI/CD pipeline 的加速器」，Vercel 是「雲端部署與預覽的最佳舞台」。



## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
