import { render, screen } from '@testing-library/react'
import Footer from '../../../components/main/Footer'

describe('Footer component', () => {
    it('should render heading', () => {
        render(<Footer />)
        const heading = screen.getByText('Footer')
        expect(heading).toBeInTheDocument()
    })
})
