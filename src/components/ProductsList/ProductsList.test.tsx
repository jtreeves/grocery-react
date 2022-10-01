import { render, screen } from '@testing-library/react'
import ProductsList from './ProductsList'

describe('ProductsList component', () => {
    it('should render heading', () => {
        render(<ProductsList />)
        const heading = screen.getByText('Products List')
        expect(heading).toBeInTheDocument()
    })
})
