import { clsx } from 'clsx'

const defaultClassName = 'inline-block w-2 h-2 mx-1 animate-bounce'

interface Props {
  className?: string
}
export const Loading = ({ className = 'bg-white' }: Props) => {
  return (
    <div className="">
      <span className={clsx(defaultClassName, className)} />
      <span className={clsx(defaultClassName, 'animation-delay-250', className)} />
      <span className={clsx(defaultClassName, 'animation-delay-500', className)} />
    </div>
  )
}
