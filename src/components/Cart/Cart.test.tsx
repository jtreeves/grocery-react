import { render, screen } from '@testing-library/react'
import Cart from './Cart'

describe('Cart component', () => {
    it('should render heading', () => {
        render(<Cart />)
        const heading = screen.getByText('Cart')
        expect(heading).toBeInTheDocument()
    })
})
