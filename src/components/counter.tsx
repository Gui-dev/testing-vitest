import { useCounter } from '../hooks/use-counter'

export const Counter = () => {
  const { count, increment } = useCounter({ initialValue: 0 })

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
