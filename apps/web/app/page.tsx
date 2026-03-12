import { useQuery } from 'convex/react'
// @workspace/backend 這個路徑開頭，是因為前端專案的 tsconfig.json 已經有設定過 paths 自己定義路徑名
// 換句話說，會來如果要使用共用 packages時，都可以先在 tsconfig.json 定義好指定的路徑名稱 再進行引用
import { api } from '@workspace/backend/convex/_generated/api' // 支援 IDE 提示：VSCode 等編輯器能正確跳轉到來源檔案。

export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex min-h-svh p-6">
      <p>app/web</p>
    </div>
  )
}
