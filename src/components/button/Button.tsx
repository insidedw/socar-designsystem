import { ButtonType } from './const.ts'
import { Color } from '../const.ts'
import { clsx } from 'clsx'
import { cva } from 'class-variance-authority'
import React from 'react'

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
      [Color.blue]: '',
      [Color.grey]: '',
      [Color.coral]: '',
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
      color: [Color.blue],
      class: 'text-white bg-blue050',
    },
    {
      type: 'largeFill',
      color: [Color.grey],
      class: 'text-white bg-grey060',
    },
    {
      type: 'largeFill',
      color: [Color.coral],
      class: 'text-white bg-coral050',
    },
    {
      type: 'regularFill',
      color: [Color.blue],
      class: 'text-white bg-blue050',
    },
    {
      type: 'regularFill',
      color: [Color.grey],
      class: 'text-white bg-grey060',
    },
    {
      type: 'regularFill',
      color: [Color.coral],
      class: 'text-white bg-coral050',
    },
    {
      type: 'regularLine',
      color: [Color.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'regularLine',
      color: [Color.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'regularLine',
      color: [Color.coral],
      class: 'text-coral050 bg-white',
    },
    {
      type: 'smallLine',
      color: [Color.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'smallLine',
      color: [Color.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'smallLine',
      color: [Color.coral],
      class: 'text-coral050 bg-white',
    },
    {
      type: 'smallText',
      color: [Color.blue],
      class: 'text-blue050 bg-white',
    },
    {
      type: 'smallText',
      color: [Color.grey],
      class: 'text-grey060 bg-white',
    },
    {
      type: 'smallText',
      color: [Color.coral],
      class: 'text-coral050 bg-white',
    },
  ],
})

interface Props {
  text: string
  iconFront?: string
  iconRear?: string
  type: ButtonType
  color: Color
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

  return React.createElement(
    tagName,
    { onClick, href, className },
    loading ? (
      <div className="">
        <span className={'before:contents'} />
        <span />
        <span />
      </div>
    ) : (
      text
    ),
  )
}
