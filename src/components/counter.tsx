import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button type="button" onClick={handleCount}>
        Increment
      </button>
    </div>
  )
}
