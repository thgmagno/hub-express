import Link from 'next/link'

export function Display({ value, isUrl }: { value: string; isUrl?: boolean }) {
  if (isUrl) {
    return (
      <Link
        href={`https://${value}`}
        target="_blank"
        className="flex-1 text-blue-500 hover:underline"
      >
        {value}
      </Link>
    )
  }

  return <div className="flex-1">{value}</div>
}
