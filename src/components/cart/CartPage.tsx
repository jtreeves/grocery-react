import { ReactEventHandler, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import CartList from './CartList'
import calculateTotal from '../../utilities/calculateTotal'

function CartPage(): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const navigate = useNavigate()
    const total: string = calculateTotal(storage.cart)

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

            <CartList products={storage.cart} />

            <p>TOTAL: ${total}</p>

            <button onClick={handleCheckout}>CHECKOUT</button>
        </main>
    )
}

export default CartPage
