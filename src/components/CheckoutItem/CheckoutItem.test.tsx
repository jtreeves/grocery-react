import { render, screen } from '@testing-library/react'
import CheckoutItem from './CheckoutItem'

describe('CheckoutItem component', () => {
    it('should render heading', () => {
        render(<CheckoutItem />)
        const heading = screen.getByText('Checkout Item')
        expect(heading).toBeInTheDocument()
    })
})
