import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Greeting } from '../greeting'

describe('<Greeting />', () => {
  it('should be able renders a default greenting', () => {
    render(<Greeting />)

    expect(screen.getByText('Hello, Batman')).toBeInTheDocument()
  })
})
