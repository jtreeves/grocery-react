import { render, screen } from '@testing-library/react'
import CartList from '../../../components/cart/CartList'

describe('CartList component', () => {
    it('should render heading', () => {
        render(<CartList products={[]} />)
        const heading = screen.getByText('Cart List')
        expect(heading).toBeInTheDocument()
    })
})
