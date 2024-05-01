import { AllowedToShowLoadingButtonType, ButtonType } from './const.ts'
import { ButtonColor } from '../const.ts'
import { clsx } from 'clsx'
import { cva } from 'class-variance-authority'
import React from 'react'
import { Loading } from '../loading'

const buttonVariants = cva('inline-block active:opacity-85 relative', {
  variants: {
    disabled: {
      true: 'text-grey040 cursor-not-allowed',
      false: '',
    },
    type: {
      largeFill: 'my-0 mx-auto w-full h-16 text-[18px] leading-socar-large font-medium',
      regularFill: 'my-0 mx-auto w-full h-14 text-[16px] leading-6 font-medium',
      regularLine: 'my-0 mx-auto w-full h-14 text-[16px] leading-6 font-medium border border-solid border-grey030',
      smallLine:
        'py-[5px] px-2 h-8 text-[14px] socar-regular font-normal w-auto border border-solid border-grey030 rounded-sm',
      smallText: 'p-2 h-8 text-[14px] socar-regular font-normal w-auto',
    },
    color: {
      [ButtonColor.blue]: '',
      [ButtonColor.grey]: '',
      [ButtonColor.coral]: '',
    },
  },
  compoundVariants: [
    {
      type: 'largeFill',
      disabled: true,
      class: 'bg-grey030',
    },
    {
      type: 'regularFill',
      disabled: true,
      class: 'bg-grey030',
    },
    {
      type: 'regularLine',
      disabled: true,
      class: 'bg-grey030',
    },
    {
      type: 'smallLine',
      disabled: true,
      class: 'bg-grey030',
    },
    {
      type: 'largeFill',
      color: [ButtonColor.blue],
      class: 'text-white bg-blue050',
    },
    {
      type: 'largeFill',
      color: [ButtonColor.grey],
      class: 'text-white bg-grey060',
    },
    {
      type: 'largeFill',
      color: [ButtonColor.coral],
      class: 'text-white bg-coral050',
    },
    {
      type: 'regularFill',
      color: [ButtonColor.blue],
      class: 'text-white bg-blue050',
    },
    {
      type: 'regularFill',
      color: [ButtonColor.grey],
      class: 'text-white bg-grey060',
    },
    {
      type: 'regularFill',
      color: [ButtonColor.coral],
      class: 'text-white bg-coral050',
    },
    {
      type: 'regularLine',
      color: [ButtonColor.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'regularLine',
      color: [ButtonColor.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'regularLine',
      color: [ButtonColor.coral],
      class: 'text-coral050 bg-white',
    },
    {
      type: 'smallLine',
      color: [ButtonColor.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'smallLine',
      color: [ButtonColor.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'smallLine',
      color: [ButtonColor.coral],
      class: 'text-coral050 bg-white',
    },
    {
      type: 'smallText',
      color: [ButtonColor.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'smallText',
      color: [ButtonColor.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'smallText',
      color: [ButtonColor.coral],
      class: 'text-coral050 bg-white',
    },
  ],
})

interface Props {
  text: string
  iconFront?: string
  iconRear?: string
  type: ButtonType
  color: ButtonColor
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
  tagName?: string
  href?: string
}

export const Button = ({
  type,
  color,
  text,
  disabled,
  onClick,
  href,
  tagName = 'button',
  className: classNameProp,
  loading,
}: Props) => {
  const className = clsx(buttonVariants({ type, color, disabled }), classNameProp)

  const showLoading = loading && AllowedToShowLoadingButtonType.includes(type)
  return React.createElement(
    tagName,
    { onClick, href, className },
    showLoading ? <Loading className={type === 'regularLine' ? 'bg-grey030' : undefined} /> : text,
  )
}
