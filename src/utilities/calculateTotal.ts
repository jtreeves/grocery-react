import { Product } from '../interfaces'

function calculateTotal(
    products: Product[]
): number {
    let total: number = 0

    products.forEach((product: Product) => {
        total += product.price
    })

    return total
}

export default calculateTotal
