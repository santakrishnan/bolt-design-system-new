import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="font-medium">Hello World</div>
    </div>
  )
}
