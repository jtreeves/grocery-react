import { ReactElement } from 'react'
import { ProductsTallyProp, ProductTally } from '../../interfaces'
import CheckoutProduct from './CheckoutProduct'

function CheckoutList({
    products
}: ProductsTallyProp): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: ProductTally, 
        index: number
    ): ReactElement => {
        return (
            <li key={index}>
                <CheckoutProduct product={product} />
            </li>
        )
    })

    return (
        <ul>
            {mappedProducts}
        </ul>
    )
}

export default CheckoutList
