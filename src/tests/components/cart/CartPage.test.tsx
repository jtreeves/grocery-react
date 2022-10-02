import { render, screen } from '@testing-library/react'
import CartPage from '../../../components/cart/CartPage'

describe('CartPage component', () => {
    it('should render heading', () => {
        render(<CartPage />)
        const heading = screen.getByText('Cart')
        expect(heading).toBeInTheDocument()
    })
})
