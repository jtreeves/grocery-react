import { Product } from '../interfaces'
import products from '../data/products'

function findProductById(
    id: string
): Product {
    const foundProducts: Product[] = products.filter((
        product: Product
    ): boolean => {
        return product.id === id
    })

    return foundProducts[0]
}

export default findProductById
