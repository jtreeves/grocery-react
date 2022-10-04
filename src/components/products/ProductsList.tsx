import { ReactElement } from 'react'
import { ProductTally, ProductsTallyProp } from '../../interfaces'
import ProductHighlight from './ProductHighlight'

function ProductsList({
    products
}: ProductsTallyProp): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: ProductTally, 
        index: number
    ): ReactElement => {
        return (
            <ProductHighlight 
                key={index} 
                id={product.id} 
            />
        )
    })

    return (
        <ul>
            {mappedProducts}
        </ul>
    )
}

export default ProductsList
