import { 
    Route, 
    Routes,
    Navigate
} from 'react-router-dom'
import GlobalStorage from './GlobalStorage'
import Home from './components/Home/Home'
import CategoryResults from './components/CategoryResults/CategoryResults'
import Cart from './components/Cart/Cart'
import Receipt from './components/Receipt/Receipt'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App(): JSX.Element {
    return (
        <GlobalStorage.Provider
            value={[{}, () => {}]}
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
                    path='results'
                    element={<CategoryResults />}
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
