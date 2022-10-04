import { ProductTally } from '../interfaces'

function updateProductTally(
    id: string,
    increment: boolean,
    collection: ProductTally[]
): ProductTally[] {
    const updatedCollection: ProductTally[] = collection.map((
        product: ProductTally
    ): ProductTally => {
        if (product.id === id) {
            const updatedTally: number = increment ? product.tally + 1 : product.tally - 1
            const updatedProduct: ProductTally = {
                id: product.id,
                tally: updatedTally
            }

            return updatedProduct
        } else {
            return product
        }
    })

    return updatedCollection
}

export default updateProductTally
