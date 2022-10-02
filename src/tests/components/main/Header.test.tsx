import { render, screen } from '@testing-library/react'
import Header from '../../../components/main/Header'

describe('Header component', () => {
    it('should render heading', () => {
        render(<Header />)
        const heading = screen.getByText('Header')
        expect(heading).toBeInTheDocument()
    })
})
