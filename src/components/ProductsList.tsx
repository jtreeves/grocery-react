import { ReactElement } from 'react'
import { Product, ProductsProp } from '../interfaces'
import ProductHighlight from './ProductHighlight'

function ProductsList({
    products
}: ProductsProp): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: Product, 
        index: number
    ) => {
        return (
            <li key={index}>
                <ProductHighlight product={product} />
            </li>
        )
    })

    return (
        <ul>
            {mappedProducts}
        </ul>
    )
}

export default ProductsList
