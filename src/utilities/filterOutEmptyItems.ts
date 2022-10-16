import { ProductTally } from '../interfaces'

function filterOutEmptyItems(
    items: ProductTally[]
): ProductTally[] {
    const nonZeroItems: ProductTally[] = items.filter((
        item: ProductTally
    ): boolean => {
        return item.tally !== 0
    })

    return nonZeroItems
}

export default filterOutEmptyItems
