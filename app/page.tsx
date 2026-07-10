const items = ["ui-base", "auth", "billing", "hello"] as const

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">@gic</p>
        <h1 className="text-4xl font-bold tracking-tight">GIC Registry</h1>
        <p className="max-w-2xl text-muted-foreground">
          Public shadcn registry for shared product-app primitives and flows.
        </p>
      </header>
      <main className="grid gap-3">
        {items.map((item) => (
          <a
            className="rounded-lg border p-4 font-mono text-sm transition-colors hover:bg-muted"
            href={`/r/${item}.json`}
            key={item}
          >
            @gic/{item}
          </a>
        ))}
      </main>
    </div>
  )
}
