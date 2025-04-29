import { buttonVariants } from './ui/button'

export function Display({ value }: { value: string }) {
  return (
    <div className={`flex-1 ${buttonVariants({ variant: 'none' })}`}>
      {value}
    </div>
  )
}
