import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CartPage from '../../../components/cart/CartPage'

describe('CartPage component', () => {
    it('should render heading', () => {
        render(<BrowserRouter><CartPage /></BrowserRouter>)
        const heading = screen.getByText('Cart')
        expect(heading).toBeInTheDocument()
    })
})
