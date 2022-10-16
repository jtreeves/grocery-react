import { Product } from '../interfaces'
import findProductById from './findProductById'

function calculateItemTotal(
    id: string,
    amount: number
): number {
    const product: Product = findProductById(id)
    const price: number = product.price
    const total: number = price * amount

    return total
}

export default calculateItemTotal
