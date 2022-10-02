import { ProductTally } from '../interfaces'

function calculateTotal(
    products: ProductTally[]
): string {
    let total: number = 0

    products.forEach((
        product: ProductTally
    ): void => {
        total += product.price * product.tally
    })

    const formattedTotal: string = (Math.round(total * 100) / 100).toFixed(2)

    return formattedTotal
}

export default calculateTotal
