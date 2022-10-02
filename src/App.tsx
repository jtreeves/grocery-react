import { useState } from 'react'
import { 
    Route, 
    Routes,
    Navigate
} from 'react-router-dom'
import { Storage } from './interfaces'
import GlobalStorage from './GlobalStorage'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Receipt from './pages/Receipt'
import Header from './components/Header'
import Footer from './components/Footer'

function App(): JSX.Element {
    const [storage, setStorage] = useState<Storage>({
        cart: [],
        stock: []
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
                
                <Route 
                    path='receipt'
                    element={<Receipt />}
                />
            </Routes>

            <Footer />
        </GlobalStorage.Provider>
    )
}

export default App
