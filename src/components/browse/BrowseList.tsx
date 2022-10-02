import { ReactElement } from 'react'
import { Product, ProductsProp } from '../../interfaces'
import BrowseItem from './BrowseItem'

function BrowseList({
    products
}: ProductsProp): JSX.Element {
    const mappedProducts: ReactElement[] = products.map((
        product: Product, 
        index: number
    ): ReactElement => {
        return (
            <li key={index}>
                <BrowseItem product={product} />
            </li>
        )
    })

    return (
        <ul>
            {mappedProducts}
        </ul>
    )
}

export default BrowseList
