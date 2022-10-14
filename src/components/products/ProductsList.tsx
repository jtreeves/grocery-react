import { 
    ReactElement 
} from 'react'
import { 
    ProductTally, 
    ProductsTallyProp 
} from '../../interfaces'
import ProductHighlight from './ProductHighlight'
import '../../styles/products.css'

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
        <ul className='products-list'>
            {mappedProducts}
        </ul>
    )
}

export default ProductsList
