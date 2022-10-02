import { ReactEventHandler, useContext } from 'react'
import { ProductTallyProp, ProductTally } from '../../interfaces'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import addProduct from '../../utilities/addProduct'
import removeProduct from '../../utilities/removeProduct'
import findProductInCollection from '../../utilities/findProductInCollection'

function CartItem({
    product
}: ProductTallyProp): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const stockedProduct: ProductTally = findProductInCollection(product.id, storage.stock)
    const stockTally: number = stockedProduct.tally

    const decreaseTallyInCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = removeProduct(product, storage.cart)
        const updatedStock: ProductTally[] = addProduct(product, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    const increaseTallyInCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = addProduct(product, storage.cart)
        const updatedStock: ProductTally[] = removeProduct(product, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.image}</p>
            <p>${product.price}</p>

            {product.tally > 0 &&
                <button onClick={decreaseTallyInCart}>
                    -
                </button>
            }

            <p>{product.tally}</p>
            
            {stockTally > 0 &&
                <button onClick={increaseTallyInCart}>
                    +
                </button>
            }
        </div>
    )
}

export default CartItem
