import { useState } from 'react'
import { 
    Route, 
    Routes,
    Navigate
} from 'react-router-dom'
import { Storage } from './interfaces'
import GlobalStorage from './GlobalStorage'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import HomePage from './components/main/HomePage'
import BrowsePage from './components/browse/BrowsePage'
import CartPage from './components/cart/CartPage'
import createInitialStock from './utilities/createInitialStock'

function App(): JSX.Element {
    const [storage, setStorage] = useState<Storage>({
        cart: [],
        stock: createInitialStock()
    })

    return (
        <GlobalStorage.Provider
            value={[storage, setStorage]}
        >
            <Header />

            <Routes>
                <Route 
                    path='/'
                    element={<Navigate to='home'/>}
                />
                
                <Route 
                    path='home'
                    element={<HomePage />}
                />
                
                <Route 
                    path='browse'
                    element={<BrowsePage />}
                />
                
                <Route 
                    path='cart'
                    element={<CartPage />}
                />
            </Routes>

            <Footer />
        </GlobalStorage.Provider>
    )
}

export default App
