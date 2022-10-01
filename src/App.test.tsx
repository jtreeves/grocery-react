import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
    it('should render greeting', () => {
        render(<App />)
        const greeting = screen.getByText('Hello, world!')
        expect(greeting).toBeInTheDocument()
    })
})
