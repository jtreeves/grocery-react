import { 
    ReactEventHandler, 
    useContext 
} from 'react'
import { 
    NavigateFunction, 
    useNavigate 
} from 'react-router-dom'
import { 
    StorageContext 
} from '../../types'
import calculateTotal from '../../utilities/calculateTotal'
import formatCurrency from '../../utilities/formatCurrency'
import GlobalStorage from '../../GlobalStorage'
import ProductsList from '../products/ProductsList'

function CartPage(): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const navigate: NavigateFunction = useNavigate()
    const total: number = calculateTotal(storage.cart)
    const formattedTotal: string = formatCurrency(total)

    const handleCheckout: ReactEventHandler = (): void => {
        setStorage({
            ...storage,
            cart: []
        })
        navigate('home')
    }

    return (
        <main id='cart'>
            <h1>Cart</h1>

            <ProductsList 
                products={storage.cart} 
            />

            <p>
                TOTAL: {formattedTotal}
            </p>

            <button onClick={handleCheckout}>
                CHECKOUT
            </button>
        </main>
    )
}

export default CartPage
