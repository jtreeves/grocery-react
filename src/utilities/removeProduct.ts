import { Product, ProductTally } from '../interfaces'

function removeProduct(
    product: Product,
    collection: ProductTally[]
): ProductTally[] {
    const updatedCollection: ProductTally[] = collection.map((
        currentProduct: ProductTally
    ) => {
        if (currentProduct.id === product.id) {
            const updatedProduct: ProductTally = {
                ...currentProduct,
                tally: currentProduct.tally - 1
            }

            return updatedProduct
        } else {
            return currentProduct
        }
    })

    return updatedCollection
}

export default removeProduct
