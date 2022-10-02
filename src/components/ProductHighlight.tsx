import { ReactEventHandler, useContext } from 'react'
import { ProductProp, ProductTally } from '../interfaces'
import { StorageContext } from '../types'
import GlobalStorage from '../GlobalStorage'
import addProduct from '../utilities/addProduct'
import removeProduct from '../utilities/removeProduct'

function ProductHighlight({
    product
}: ProductProp): JSX.Element {
    const [storage, setStorage] = useContext<StorageContext>(GlobalStorage)

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
            <p>{product.price}</p>
            
            <button onClick={addProductToCart}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductHighlight
