import { Category, ProductTally } from '../interfaces'
import findProductInCollection from './findProductInCollection'

function findProductTalliesByCategory(
    category: Category,
    collection: ProductTally[]
): ProductTally[] {
    const foundProducts: ProductTally[] = category.products.map((
        productId: string
    ): ProductTally => {
        return findProductInCollection(productId, collection)
    })

    return foundProducts
}

export default findProductTalliesByCategory
