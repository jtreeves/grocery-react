import {
    FormEventHandler,
    ReactElement
} from 'react'
import { 
    Category
} from '../../interfaces'
import categories from '../../data/categories'

interface SelectCategoryProp {
    handleCategory: FormEventHandler
}

function SelectCategory({
    handleCategory
}: SelectCategoryProp): JSX.Element {
    const categoryOptions: ReactElement[] = categories.map((
        category: Category, 
        index: number
    ): ReactElement => {
        return (
            <option value={category.name} key={index}>
                {category.name}
            </option>
        )
    })

    return (
        <form onChange={handleCategory}>
            <label htmlFor='category'>Category</label>
            <select name='category'>
                {categoryOptions}
            </select>
        </form>
    )
}

export default SelectCategory
