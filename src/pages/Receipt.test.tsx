import { render, screen } from '@testing-library/react'
import Receipt from './Receipt'

describe('Receipt component', () => {
    it('should render heading', () => {
        render(<Receipt />)
        const heading = screen.getByText('Receipt')
        expect(heading).toBeInTheDocument()
    })
})
