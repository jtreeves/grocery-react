import { 
    useContext 
} from 'react'
import { 
    Location, 
    useLocation 
} from 'react-router-dom'
import { 
    Identification, 
    ProductTally, 
    Product 
} from '../../interfaces'
import { 
    StorageContext 
} from '../../types'
import {
    findProductInCollection,
    findProductById,
    formatCurrency
 } from '../../utilities'
import GlobalStorage from '../../GlobalStorage'
import BrowseItem from '../browse/BrowseItem'
import CartItem from '../cart/CartItem'

function ProductHighlight({
    id
}: Identification): JSX.Element {
    const [storage] = useContext<StorageContext>(GlobalStorage)
    const location: Location = useLocation()
    const product: Product = findProductById(id)
    const name: string = product.name
    const image: string = product.image
    const price: string = formatCurrency(product.price)
    const stockProduct: ProductTally = findProductInCollection(product.id, storage.stock)
    const stockTally: number = stockProduct.tally
    const cartProduct: ProductTally = findProductInCollection(product.id, storage.cart)
    const cartTally: number = cartProduct ? cartProduct.tally : 0
    const isBrowse: boolean = location.pathname.includes('browse')
    const isCart: boolean = location.pathname.includes('cart')

    return (
        <li>
            <article>
                <h2>{name}</h2>
                <p>{image}</p>
                <p>{price}</p>
            </article>

            {isBrowse &&
                <BrowseItem 
                    id={id}
                    stockTally={stockTally}
                />
            }

            {isCart &&
                <CartItem 
                    id={id}
                    stockTally={stockTally}
                    cartTally={cartTally}
                />
            }
        </li>
    )
}

export default ProductHighlight
