import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App component', () => {
    it('should render Home header', () => {
        render(<BrowserRouter>
            <App />
        </BrowserRouter>)
        const header = screen.getByText('Home')
        expect(header).toBeInTheDocument()
    })
})
