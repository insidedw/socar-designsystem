import { NotificationColor } from '../const.ts'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { PropsWithChildren } from 'react'

const notificationVariants = cva('inline-block', {
  variants: {
    color: {
      [NotificationColor.blue]: 'text-white bg-blue050',
      [NotificationColor.coral]: 'text-white bg-coral050',
    },
  },
})

interface Props {
  text?: string
  color: NotificationColor
}

export const Notification = ({ text, color, children }: PropsWithChildren<Props>) => {
  return (
    <div className={'relative inline-block'}>
      <div data-content={text} className={clsx('inline-block')}>
        {children}
      </div>
      <span
        className={clsx(
          'align-top px-[3px] py-[3px] rounded-full text-[12px] leading-[18px]',
          notificationVariants({ color }),
          Boolean(text) && 'px-[5px] py-0 ml-[-10px] mt-[-4px]',
        )}
      >
        {text}
      </span>
    </div>
  )
}
