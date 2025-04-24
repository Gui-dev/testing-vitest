import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'

import { useCounter } from '../use-counter'

describe('useCounter())', () => {
  it('should be able to initial value is 5', async () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))

    expect(result.current.count).toEqual(5)
  })
})
