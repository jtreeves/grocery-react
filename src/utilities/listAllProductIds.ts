import { Product } from '../interfaces'
import products from '../data/products'

function listAllProductIds(): string[] {
    const allProductIds: string[] = products.map((
        product: Product
    ): string => {
        return product.id
    })

    return allProductIds
}

export default listAllProductIds
