import { render, screen } from '@testing-library/react'
import BrowsePage from '../../../components/browse/BrowsePage'

describe('BrowsePage component', () => {
    it('should render heading', () => {
        render(<BrowsePage />)
        const heading = screen.getByText('Browse')
        expect(heading).toBeInTheDocument()
    })
})
