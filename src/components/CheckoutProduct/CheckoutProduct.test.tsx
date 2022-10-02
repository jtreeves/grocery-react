import { render, screen } from '@testing-library/react'
import CheckoutProduct from './CheckoutProduct'

describe('CheckoutProduct component', () => {
    it('should render heading', () => {
        render(<CheckoutProduct />)
        const heading = screen.getByText('Checkout Product')
        expect(heading).toBeInTheDocument()
    })
})
