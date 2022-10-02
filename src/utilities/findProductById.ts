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

    const foundProduct: Product = foundProducts[0]

    return foundProduct
}

export default findProductById
