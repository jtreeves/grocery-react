import { ReactEventHandler, useContext } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import calculateTotal from '../../utilities/calculateTotal'
import formatCurrency from '../../utilities/formatCurrency'
import ProductsList from '../products/ProductsList'

function CartPage(): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const navigate: NavigateFunction = useNavigate()
    const total: number = calculateTotal(storage.cart)

    const handleCheckout: ReactEventHandler = (): void => {
        setStorage({
            ...storage,
            cart: []
        })
        navigate('home')
    }

    return (
        <main>
            <h1>Cart</h1>

            <ProductsList 
                products={storage.cart} 
            />

            <p>
                TOTAL: ${formatCurrency(total)}
            </p>

            <button onClick={handleCheckout}>
                CHECKOUT
            </button>
        </main>
    )
}

export default CartPage
