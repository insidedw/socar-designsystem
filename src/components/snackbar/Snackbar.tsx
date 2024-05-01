import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  text: string
  button?: {
    text: string
  }
}
export const Snackbar = ({ text, button, isOpen: isOpenProp }: Props) => {
  const buttonTextLength = button?.text.length ?? 0
  const isLongButton = buttonTextLength >= 3
  const [isOpen, setValue] = useState(isOpenProp)

  useEffect(() => {
    if (!isOpen) return
    setTimeout(() => {
      setValue(false)
    }, 5000)
  }, [isOpen, setValue])

  useEffect(() => {
    if (isOpen !== isOpenProp) setValue(isOpenProp)
  }, [isOpenProp])

  return (
    <div
      className={clsx(
        'flex justify-between text-white bg-dimThick rounded p-4 mx-4',
        isLongButton ? 'flex-col justify-between text-left' : 'text-center',
        isOpen ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className={'pr-4 text-[14px] leading-socar-regular tracking-normal font-medium'}>{text}</div>
      {button && (
        <div className={clsx('min-w-[26px] text-blue060 font-normal text-right', !isLongButton && 'w-[29px]')}>
          <button
            className={'text-[14px] leading-socar-regular tracking-normal font-medium'}
            onClick={() => setValue(false)}
          >
            {button.text}
          </button>
        </div>
      )}
    </div>
  )
}
