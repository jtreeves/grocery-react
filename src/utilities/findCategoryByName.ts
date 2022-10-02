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

    const foundCategory: Category = foundCategories[0]

    return foundCategory
}

export default findCategoryByName
