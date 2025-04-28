interface Props {
  title: string
  children: React.ReactNode
}

export function Page({ title, children }: Props) {
  return (
    <div className="flex-1 p-3 pb-20">
      <h1 className="text-muted-foreground mb-3 w-full border-b px-2 pb-2 text-xl font-semibold">
        {title}
      </h1>
      <section className="mx-auto my-6 max-w-5xl space-y-4 px-2">
        {children}
      </section>
    </div>
  )
}
