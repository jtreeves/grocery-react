import { ProductTally } from '../interfaces'

function countItemsInCart(
    cart: ProductTally[]
): number {
    let total: number = 0

    cart.forEach(item => {
        total += item.tally
    })

    return total
}

export default countItemsInCart
