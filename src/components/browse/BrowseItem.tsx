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
import findProductInCollection from '../../utilities/findProductInCollection'
import updateProductTally from '../../utilities/updateProductTally'
import GlobalStorage from '../../GlobalStorage'

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
    const buttonClass: string = inStock ? '' : 'out-of-stock'
    const buttonFunction: ReactEventHandler = inStock ? addProductToCart : () => {}

    return (
        <article>
            {stockTally < 6 && stockTally > 0 &&
                <p>Only {stockTally} left in stock!</p>
            }

            <button 
                onClick={buttonFunction}
                className={buttonClass}
            >
                {buttonText}
            </button>
        </article>
    )
}

export default BrowseItem
