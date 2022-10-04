import { ProductTally, Product } from '../interfaces'
import findProductById from './findProductById'

function calculateTotal(
    products: ProductTally[]
): number {
    let total: number = 0

    products.forEach((
        product: ProductTally
    ): void => {
        const fullProduct: Product = findProductById(product.id)
        const price: number = fullProduct.price
        const tally: number = product.tally

        total += price * tally
    })

    return total
}

export default calculateTotal
