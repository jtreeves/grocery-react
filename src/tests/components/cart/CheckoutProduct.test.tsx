import { render, screen } from '@testing-library/react'
import CartItem from '../../../components/cart/CartItem'

describe('CartItem component', () => {
    it('should render heading', () => {
        render(<CartItem product={{
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
