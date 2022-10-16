import { 
    ReactEventHandler, 
    useContext
} from 'react'
import { 
    ProductTally, 
    Identification 
} from '../../interfaces'
import { 
    StorageContext 
} from '../../types'
import GlobalStorage from '../../GlobalStorage'
import updateProductTally from '../../utilities/updateProductTally'
import filterOutEmptyItems from '../../utilities/filterOutEmptyItems'
import calculateItemTotal from '../../utilities/calculateItemTotal'
import formatCurrency from '../../utilities/formatCurrency'

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
    const inStock: boolean = stockTally > 0
    const itemTotal: number = calculateItemTotal(id, cartTally)
    const formattedTotal: string = formatCurrency(itemTotal)

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
        const filteredCart: ProductTally[] = filterOutEmptyItems(updatedCart)

        setStorage({
            cart: filteredCart,
            stock: updatedStock
        })
    }

    const topClass: string = inStock ? '' : 'muted-button'
    const topText: string = inStock ? '+' : 'x'
    const topHover: string = inStock ? 'INCREASE QUANTITY' : 'OUT OF STOCK'
    const topFunction: ReactEventHandler = inStock ? addProductToCart : () => {}

    return (
        <article className='cart-item'>
            <p className='math-symbol'>x</p>

            <div>
                <button 
                    onClick={topFunction}
                    title={topHover}
                    className={topClass}
                >
                    {topText}
                </button>

                <p>{cartTally}</p>

                <button 
                    onClick={removeProductFromCart}
                    title='DECREASE QUANTITY'
                >
                    -
                </button>
            </div>

            <p className='math-symbol'>=</p>

            <p className='item-total'>{formattedTotal}</p>
        </article>
    )
}

export default CartItem
