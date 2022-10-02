import { Category } from '../interfaces'
import categories from '../data/categories'

function findCategoryByName(
    name: string
): Category {
    const foundCategories: Category[] = categories.filter((
        category: Category
    ): boolean => {
        return category.name === name
    })

    return foundCategories[0]
}

export default findCategoryByName
