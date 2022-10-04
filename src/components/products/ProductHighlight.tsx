import { useContext } from 'react'
import { Location, useLocation } from 'react-router-dom'
import { Identification, ProductTally, Product } from '../../interfaces'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import findProductInCollection from '../../utilities/findProductInCollection'
import findProductById from '../../utilities/findProductById'
import formatCurrency from '../../utilities/formatCurrency'
import BrowseItem from '../browse/BrowseItem'
import CartItem from '../cart/CartItem'

function ProductHighlight({
    id
}: Identification): JSX.Element {
    const [storage] = useContext<StorageContext>(GlobalStorage)
    const location: Location = useLocation()
    const product: Product = findProductById(id)
    const stockProduct: ProductTally = findProductInCollection(product.id, storage.stock)
    const stockTally: number = stockProduct.tally
    const cartProduct: ProductTally = findProductInCollection(product.id, storage.cart)
    const cartTally: number = cartProduct.tally
    const isBrowse: boolean = location.pathname.includes('browse')
    const isCart: boolean = location.pathname.includes('cart')

    return (
        <li>
            <h2>{product.name}</h2>
            <p>{product.image}</p>
            <p>${formatCurrency(product.price)}</p>

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
