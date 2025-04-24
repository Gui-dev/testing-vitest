import { useState } from 'react'

interface IUseCounterProps {
  initialValue: number
}

export const useCounter = ({ initialValue = 0 }: IUseCounterProps) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count => count - 1)
  }

  return {
    count,
    increment,
    decrement,
  }
}
