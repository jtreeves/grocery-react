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

    const addProductToCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = !findProductInCollection(id, storage.cart) ? [...storage.cart, {id: id, tally: 1}] : updateProductTally(id, true, storage.cart)
        const updatedStock: ProductTally[] = updateProductTally(id, false, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    return (
        <>
            {stockTally < 6 && stockTally > 0 &&
                <p>Only {stockTally} left in stock!</p>
            }

            {stockTally > 0 &&
                <button 
                    onClick={addProductToCart}
                >
                    Add to Cart
                </button>
            }

            {stockTally === 0 &&
                <p>OUT OF STOCK</p>
            }
        </>
    )
}

export default BrowseItem
