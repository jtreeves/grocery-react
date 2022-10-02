import { useContext } from 'react'
import GlobalStorage from '../../GlobalStorage'
import { ProductTallyProp, ProductTally } from '../../interfaces'
import { StorageContext } from '../../types'
import addProduct from '../../utilities/addProduct'
import removeProduct from '../../utilities/removeProduct'

function CheckoutProduct({
    product
}: ProductTallyProp): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)

    const increaseTallyInCart = () => {
        const updatedCart: ProductTally[] = addProduct(product, storage.cart)
        const updatedStock: ProductTally[] = removeProduct(product, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    const decreaseTallyInCart = () => {
        const updatedCart: ProductTally[] = removeProduct(product, storage.cart)
        const updatedStock: ProductTally[] = addProduct(product, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.tally}</p>
            <button onClick={increaseTallyInCart}>Increase Amount by 1</button>
            <button onClick={decreaseTallyInCart}>Decrease Amount by 1</button>
        </div>
    )
}

export default CheckoutProduct
