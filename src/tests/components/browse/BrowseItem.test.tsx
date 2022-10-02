import { render, screen } from '@testing-library/react'
import BrowseItem from '../../../components/browse/BrowseItem'
import products from '../../../data/products'

describe('BrowseItem component', () => {
    it('should render heading', () => {
        render(<BrowseItem product={products[0]} />)
        const heading = screen.getByText('Product Highlight')
        expect(heading).toBeInTheDocument()
    })
})
