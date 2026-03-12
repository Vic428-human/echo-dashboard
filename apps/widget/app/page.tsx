"use client";
import { useQuery } from 'convex/react'
import { api } from '@workspace/backend/_generated/api'
import { add } from "@workspace/math/add"

export default function Page() {
   const users = useQuery(api.users.getMany);
  return (
   <div className="flex flex-col items-center justify-center min-h-svh">
      <h1>Hello apps/widget</h1>
      <ul>
        {users?.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
