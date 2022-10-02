import { Product, ProductTally } from '../interfaces'
import products from '../data/products'

function createInitialStock(): ProductTally[] {
    const initialStock: ProductTally[] = products.map((
        product: Product
    ): ProductTally => {
        return {
            ...product,
            tally: Math.floor(Math.random() * 20)
        }
    })

    return initialStock
}

export default createInitialStock
