import { render, screen } from '@testing-library/react'
import Products from './Products'

describe('Products component', () => {
    it('should render heading', () => {
        render(<Products />)
        const heading = screen.getByText('Products')
        expect(heading).toBeInTheDocument()
    })
})
