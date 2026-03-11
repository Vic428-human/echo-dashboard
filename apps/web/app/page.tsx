import { Input } from "@workspace/ui/components/input"
import { add } from "@workspace/math/add"


export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Hello apps/web</h1>
          <p>{add(2, 2)}</p>
        </div>
        <Input/>
      </div>
    </div>
  )
}
