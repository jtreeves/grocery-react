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
import Home from './components/main/Home'
import Products from './components/browse/Products'
import Cart from './components/cart/Cart'
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
                    element={<Home />}
                />
                
                <Route 
                    path='products'
                    element={<Products />}
                />
                
                <Route 
                    path='cart'
                    element={<Cart />}
                />
            </Routes>

            <Footer />
        </GlobalStorage.Provider>
    )
}

export default App
