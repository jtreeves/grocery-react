import { render, screen } from '@testing-library/react'
import ProductHighlight from '../../../components/browse/ProductHighlight'
import products from '../../../data/products'

describe('ProductHighlight component', () => {
    it('should render heading', () => {
        render(<ProductHighlight product={products[0]} />)
        const heading = screen.getByText('Product Highlight')
        expect(heading).toBeInTheDocument()
    })
})
