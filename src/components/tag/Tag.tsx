import { TagColor } from '../const.ts'
import { cva } from 'class-variance-authority'

const tagVariants = cva('inline-block h-6 text-[12px] leading-[18px] px-2 py-[3px] rounded-sm mr-1 overflow-hidden', {
  variants: {
    color: {
      [TagColor.basic]: 'text-grey050 bg-grey030',
      [TagColor.blue]: 'text-white bg-blue050',
      [TagColor.grey]: 'text-white bg-grey060',
      [TagColor.navy]: 'text-white bg-navy050',
      [TagColor.red]: 'text-white bg-red050',
    },
  },
})

interface Props {
  color: TagColor
  text: string
}
export const Tag = ({ text, color }: Props) => {
  return <span className={tagVariants({ color })}>{text}</span>
}
