import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../../components/main/Header'

describe('Header component', () => {
    it('should render heading', () => {
        render(<BrowserRouter><Header /></BrowserRouter>)
        const heading = screen.getByText('Grocery')
        expect(heading).toBeInTheDocument()
    })
})
