import { render, screen } from '@testing-library/react'
import Footer from '../../../components/main/Footer'

describe('Footer component', () => {
    it('should contain copyright symbol', () => {
        render(<Footer />)
        const symbol = screen.getByText(/©/)
        expect(symbol).toBeInTheDocument()
    })
})
