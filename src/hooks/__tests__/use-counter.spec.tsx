import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'

import { useCounter } from '../use-counter'

describe('useCounter())', () => {
  it('should be able to initial value is 5', async () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))

    expect(result.current.count).toBe(5)
  })

  it('should be able to increment', async () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }))

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(2)
  })
})
