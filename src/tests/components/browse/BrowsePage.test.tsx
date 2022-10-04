import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BrowsePage from '../../../components/browse/BrowsePage'

describe('BrowsePage component', () => {
    it('should render heading', () => {
        render(<BrowserRouter><BrowsePage /></BrowserRouter>)
        const heading = screen.getAllByText('All Products')
        expect(heading[0]).toBeInTheDocument()
    })
})
