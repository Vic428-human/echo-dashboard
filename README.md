# 透過 pnpm dlx shadcn@latest init --monorepo + Turborepo 建置的理由

- 共用 UI 元件庫
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

# Next.js 與 Turborepo 開發指令差異比較

| 指令 | 所屬工具 | 功能定位 | 適用場景 | 特點 |
|------|----------|----------|----------|------|
| **`next dev --turbopack`** | Next.js CLI | 啟動 Next.js 開發伺服器，使用 **Turbopack** bundler | 單一 Next.js 專案 | 更快的編譯速度、支援增量編譯，取代 Webpack |
| **`turbo dev`** | Turborepo CLI | 啟動 Monorepo 的開發模式，並行監控多個 package | Monorepo 專案 (含多個 app/lib) | 自動偵測依賴、並行執行任務，適合大型專案協作 |

---

## 詳細解釋

### 1. `next dev --turbopack`
- 在 Next.js 專案中啟動開發伺服器，並使用 **Turbopack** 作為 bundler。  
- Turbopack 是 Vercel 開發的新一代 bundler，速度比 Webpack 快很多，特別適合大型專案。  
- 仍在持續改進中，某些 Webpack plugin 或 loader 可能不完全相容。  

### 2. `turbo dev`
- 在 Monorepo 中啟動 Turborepo 的開發模式。  
- 會同時監控多個 package 的變化，並根據依賴關係自動執行對應的任務。  
- 適合多專案協作，能減少重複編譯，提升整體開發效率。  

---

## 使用建議
- **單一 Next.js 專案** → 用 `next dev --turbopack`，享受更快的編譯速度。  
- **Monorepo 專案 (例如同時有前端、後端、UI library)** → 用 `turbo dev`，讓 Turborepo 幫你協調各 package 的開發流程。  


# echo-tutorial\packages 的使用方式
```
echo-tutorial\packages\math\package.json 引用了共用的 echo-tutorial\packages\typescript-config package，
所以需要用 packages 裡的 package 時，像是 typescript-config，前面記得加上 @workspace，你會發現 echo-tutorial\packages\ui 底下的 package.json也是相同規則。
在專案啟用之初，shadcn串建好後，預設的package分別是 eslint-config、typescript-config、ui，而 math 則是 turborepo 裡的範例。
"devDependencies": {
    "@workspace/typescript-config": "workspace:*",
    "typescript": "latest"
  }
```