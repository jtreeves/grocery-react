import { 
    ReactEventHandler, 
    useContext 
} from 'react'
import { 
    Identification, 
    ProductTally 
} from '../../interfaces'
import { 
    StorageContext 
} from '../../types'
import GlobalStorage from '../../GlobalStorage'
import findProductInCollection from '../../utilities/findProductInCollection'
import updateProductTally from '../../utilities/updateProductTally'

interface BrowseItemProps extends Identification {
    stockTally: number
}

function BrowseItem({
    id,
    stockTally
}: BrowseItemProps): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const inStock: boolean = stockTally > 0

    const addProductToCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = !findProductInCollection(id, storage.cart) ? [...storage.cart, {id: id, tally: 1}] : updateProductTally(id, true, storage.cart)
        const updatedStock: ProductTally[] = updateProductTally(id, false, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    const buttonText: string = inStock ? '+' : 'x'
    const buttonHover: string = inStock ? 'ADD TO CART' : 'OUT OF STOCK'
    const buttonClass: string = inStock ? 'product-button' : 'product-button muted-button'
    const buttonFunction: ReactEventHandler = inStock ? addProductToCart : () => {}

    return (
        <article className='browse-item'>
            <button 
                onClick={buttonFunction}
                title={buttonHover}
                className={buttonClass}
            >
                {buttonText}
            </button>

            {stockTally < 6 && stockTally > 0 &&
                <div>
                    <p>Only {stockTally} left in stock!</p>
                </div>
            }

            {stockTally === 0 &&
                <div>
                    <p>Out of stock!</p>
                </div>
            }
        </article>
    )
}

export default BrowseItem
