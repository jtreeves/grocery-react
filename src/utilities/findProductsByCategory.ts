import { Category, Product } from '../interfaces'
import findProductById from './findProductById'

function findProductsByCategory(
    category: Category
): Product[] {
    const foundProducts: Product[] = category.products.map((
        productId: string
    ): Product => {
        return findProductById(productId)
    })

    return foundProducts
}

export default findProductsByCategory
