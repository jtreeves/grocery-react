import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('App component', () => {
    it('should render Grocery header', () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
        const header = screen.getByText('Grocery')
        expect(header).toBeInTheDocument()
    })
})
