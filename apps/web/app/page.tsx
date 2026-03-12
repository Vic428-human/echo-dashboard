"use client";
import { useQuery } from 'convex/react'
// @workspace/backend 這個路徑開頭，是因為前端專案的 tsconfig.json 已經有設定過 paths 自己定義路徑名
// 換句話說，未來使用共用的 packages 時，都可以先在 tsconfig.json 定義好指定的路徑名稱 再進行引用，
// 只是目前引用的是 convex 的後端功能
import { api } from '@workspace/backend/_generated/api' // 支援 IDE 提示：VSCode 等編輯器能正確跳轉到來源檔案。

export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1>Hello apps/web</h1>
      <ul>
        {users?.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
