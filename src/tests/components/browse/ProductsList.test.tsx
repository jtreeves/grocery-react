import { render, screen } from '@testing-library/react'
import ProductsList from '../../../components/browse/ProductsList'
import products from '../../../data/products'

describe('ProductsList component', () => {
    it('should render heading', () => {
        render(<ProductsList products={products} />)
        const heading = screen.getByText('Products List')
        expect(heading).toBeInTheDocument()
    })
})
