import { ReactElement } from 'react'
import { Product } from '../../interfaces'

interface ProductsListProps {
    products: Product[]
}

function ProductsList({
    products
}: ProductsListProps): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: Product, 
        index: number
    ) => {
        return (
            <li key={index}>
                {product.name}
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
