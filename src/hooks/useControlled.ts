import React from 'react'

interface UseControlProps<T> {
  valueProp?: T
  defaultValue: T
}

type UseControlReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export function useControlled<T>({ valueProp, defaultValue }: UseControlProps<T>): UseControlReturn<T> {
  const { current: isControlled } = React.useRef(valueProp !== undefined)
  const [state, setState] = React.useState<T>(defaultValue)

  const value = (isControlled ? valueProp : state) as T
  const setValue: React.Dispatch<React.SetStateAction<T>> = React.useCallback((b) => {
    !isControlled && setState(b)
  }, [])

  return [value, setValue]
}
