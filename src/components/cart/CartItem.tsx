import { ReactEventHandler, useContext } from 'react'
import { ProductTally, Identification } from '../../interfaces'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import updateProductTally from '../../utilities/updateProductTally'

interface CartItemProps extends Identification {
    stockTally: number
    cartTally: number
}

function CartItem({
    id,
    stockTally,
    cartTally
}: CartItemProps): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)

    const addProductToCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = updateProductTally(id, true, storage.cart)
        const updatedStock: ProductTally[] = updateProductTally(id, false, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    const removeProductFromCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = updateProductTally(id, false, storage.cart)
        const updatedStock: ProductTally[] = updateProductTally(id, true, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    return (
        <>
            {stockTally > 0 &&
                <button onClick={addProductToCart}>
                    +
                </button>
            }

            <p>{cartTally}</p>

            {cartTally > 0 &&
                <button onClick={removeProductFromCart}>
                    -
                </button>
            }
        </>
    )
}

export default CartItem
