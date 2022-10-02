import { render, screen } from '@testing-library/react'
import CheckoutList from '../../../components/cart/CheckoutList'

describe('CheckoutList component', () => {
    it('should render heading', () => {
        render(<CheckoutList products={[]} />)
        const heading = screen.getByText('Checkout List')
        expect(heading).toBeInTheDocument()
    })
})
