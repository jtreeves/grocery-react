import { render, screen } from '@testing-library/react'
import CheckoutProduct from '../../../components/cart/CheckoutProduct'

describe('CheckoutProduct component', () => {
    it('should render heading', () => {
        render(<CheckoutProduct product={{
            id: '',
            name: '',
            image: '',
            price: 0,
            tally: 0
        }} />)
        const heading = screen.getByText('Checkout Product')
        expect(heading).toBeInTheDocument()
    })
})
