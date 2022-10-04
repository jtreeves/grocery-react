import { ProductTally } from '../interfaces'

function findProductInCollection(
    id: string,
    collection: ProductTally[]
): ProductTally {
    const initialProducts: ProductTally[] = collection.filter((
        collectedProduct: ProductTally
    ): boolean => {
        return collectedProduct.id === id
    })

    const foundProduct: ProductTally = initialProducts[0]

    return foundProduct
}

export default findProductInCollection
