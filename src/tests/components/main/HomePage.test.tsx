import { render, screen } from '@testing-library/react'
import HomePage from '../../../components/main/HomePage'

describe('HomePage component', () => {
    it('should render heading', () => {
        render(<HomePage />)
        const heading = screen.getByText('Home')
        expect(heading).toBeInTheDocument()
    })
})
