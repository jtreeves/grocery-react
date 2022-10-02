import { ReactEventHandler, useContext } from 'react'
import { ProductProp, ProductTally } from '../../interfaces'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import findProductInCollection from '../../utilities/findProductInCollection'
import addProduct from '../../utilities/addProduct'
import removeProduct from '../../utilities/removeProduct'

function BrowseItem({
    product
}: ProductProp): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)
    const foundProduct: ProductTally = findProductInCollection(product.id, storage.stock)
    const productTally: number = foundProduct.tally

    const addProductToCart: ReactEventHandler = (): void => {
        const updatedCart: ProductTally[] = addProduct(product, storage.cart)
        const updatedStock: ProductTally[] = removeProduct(product, storage.stock)

        setStorage({
            cart: updatedCart,
            stock: updatedStock
        })
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.image}</p>
            <p>${product.price}</p>

            {productTally < 6 && productTally > 0 &&
                <p>Only {productTally} left in stock!</p>
            }

            {productTally > 0 &&
                <button onClick={addProductToCart}>
                    Add to Cart
                </button>
            }

            {productTally === 0 &&
                <p>OUT OF STOCK</p>
            }
        </div>
    )
}

export default BrowseItem
