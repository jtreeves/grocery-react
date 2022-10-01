import { render, screen } from '@testing-library/react'
import CategoryResults from './CategoryResults'

describe('CategoryResults component', () => {
    it('should render heading', () => {
        render(<CategoryResults />)
        const heading = screen.getByText('Category Results')
        expect(heading).toBeInTheDocument()
    })
})
