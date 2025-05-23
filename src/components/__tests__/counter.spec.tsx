import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { userEvent } from '@testing-library/user-event'

import { Counter } from '../counter'

describe('<Counter />', () => {
  it('should be able increments counter on button click', async () => {
    render(<Counter />)
    const button = screen.getByRole('button', { name: /increment/i })
    const counterValue = screen.getByTestId('counter-value')

    expect(counterValue.textContent).toEqual('0')

    await userEvent.click(button)

    expect(counterValue.textContent).toEqual('1')
  })
})
