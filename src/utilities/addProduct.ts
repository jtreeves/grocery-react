import { Product, ProductTally } from '../interfaces'

function addProduct(
    product: Product,
    collection: ProductTally[]
): ProductTally[] {
    let updatedCollection: ProductTally[] = []

    const productPresent: boolean = collection.some((
        currentProduct: ProductTally
    ) => {
        return currentProduct.id === product.id
    })

    if (!productPresent) {
        updatedCollection = [
            ...collection,
            {
                ...product,
                tally: 1
            }
        ]
    } else {
        updatedCollection = collection.map((
            currentProduct: ProductTally
        ) => {
            if (currentProduct.id === product.id) {
                const updatedProduct: ProductTally = {
                    ...currentProduct,
                    tally: currentProduct.tally + 1
                }
    
                return updatedProduct
            } else {
                return currentProduct
            }
        })
    }

    return updatedCollection
}

export default addProduct
