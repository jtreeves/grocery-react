import { render, screen } from '@testing-library/react'
import BrowseList from '../../../components/browse/BrowseList'
import products from '../../../data/products'

describe('BrowseList component', () => {
    it('should render heading', () => {
        render(<BrowseList products={products} />)
        const heading = screen.getByText('Products List')
        expect(heading).toBeInTheDocument()
    })
})
