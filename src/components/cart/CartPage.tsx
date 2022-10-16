import { 
    ReactEventHandler, 
    useContext 
} from 'react'
import { 
    NavigateFunction, 
    useNavigate,
    Link
} from 'react-router-dom'
import { 
    StorageContext 
} from '../../types'
import calculateTotal from '../../utilities/calculateTotal'
import formatCurrency from '../../utilities/formatCurrency'
import GlobalStorage from '../../GlobalStorage'
import ProductsList from '../products/ProductsList'
import '../../styles/cart.css'

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
        navigate('/home')
    }

    return (
        <main id='cart'>
            <h1>Cart</h1>

            {storage.cart.length === 0 ? <p>
                Your shopping cart is empty! Go <Link to='/browse'>browse</Link> our items, and stock up!
            </p> : <section>
                <ProductsList 
                    products={storage.cart} 
                />

                <div id='cart-checkout'>
                    <p>
                        TOTAL: {formattedTotal}
                    </p>

                    <button 
                        onClick={handleCheckout}
                        title='ALL PURCHASES FINAL; NO REFUNDS'
                    >
                        CHECKOUT
                    </button>
                </div>
            </section>}
        </main>
    )
}

export default CartPage
