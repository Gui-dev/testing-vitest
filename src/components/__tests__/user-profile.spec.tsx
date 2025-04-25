import '@testing-library/jest-dom/vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { UserProfile } from './../user-profile'

describe('<UserProfile />', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be able to fetches and displays the user data', async () => {
    // @ts-ignore
    globalThis.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: 'Bruce Wayne',
        email: 'bruce@email.com',
      }),
    })
    render(<UserProfile userId={4} />)

    expect(screen.getByText(/carregando/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /bruce wayne/i })
      ).toBeInTheDocument()
      expect(screen.getByText(/bruce@email.com/i)).toBeInTheDocument()
    })
  })
})
