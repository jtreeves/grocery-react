import { render, screen } from '@testing-library/react'
import ProductHighlight from './ProductHighlight'

describe('ProductHighlight component', () => {
    it('should render heading', () => {
        render(<ProductHighlight />)
        const heading = screen.getByText('Product Highlight')
        expect(heading).toBeInTheDocument()
    })
})
