import { ReactElement } from 'react'
import { ProductsTallyProp, ProductTally } from '../../interfaces'
import CartItem from './CartItem'

function CartList({
    products
}: ProductsTallyProp): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: ProductTally, 
        index: number
    ): ReactElement => {
        return (
            <li key={index}>
                <CartItem product={product} />
            </li>
        )
    })

    return (
        <ul>
            {mappedProducts}
        </ul>
    )
}

export default CartList
