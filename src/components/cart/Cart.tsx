import { useContext } from 'react'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import CheckoutList from './CheckoutList'
import ProductsList from '../browse/ProductsList'

function Cart(): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)

    return (
        <div>
            <h1>Cart</h1>

            <ProductsList products={storage.cart} />

            {/* <CheckoutList products={storage.cart} /> */}
        </div>
    )
}

export default Cart
