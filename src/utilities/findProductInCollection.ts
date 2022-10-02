import { ProductTally } from '../interfaces'

function findProductInCollection(
    id: string,
    collection: ProductTally[]
): ProductTally {
    const foundProducts: ProductTally[] = collection.filter((
        collectedProduct: ProductTally
    ): boolean => {
        return collectedProduct.id === id
    })

    const foundProduct: ProductTally = foundProducts[0]

    return foundProduct
}

export default findProductInCollection
