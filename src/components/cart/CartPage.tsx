import { useContext } from 'react'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import CartList from './CartList'

function CartPage(): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)

    return (
        <div>
            <h1>Cart</h1>

            <CartList products={storage.cart} />
        </div>
    )
}

export default CartPage
