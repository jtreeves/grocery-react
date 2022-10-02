import { render, screen } from '@testing-library/react'
import Home from '../../../components/main/Home'

describe('Home component', () => {
    it('should render heading', () => {
        render(<Home />)
        const heading = screen.getByText('Home')
        expect(heading).toBeInTheDocument()
    })
})
