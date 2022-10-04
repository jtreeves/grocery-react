import {
    ChangeEvent, 
    FormEventHandler, 
    ReactElement, 
    useContext, 
    useState 
} from 'react'
import { 
    Category, 
    ProductTally
} from '../../interfaces'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import categoriesData from '../../data/categories'
import findProductTalliesByCategory from '../../utilities/findProductTalliesByCategory'
import findCategoryByName from '../../utilities/findCategoryByName'
import ProductsList from '../products/ProductsList'

function BrowsePage(): JSX.Element {
    const [storage] = useContext<StorageContext>(GlobalStorage)
    const [category, setCategory] = useState<Category>(categoriesData[0])
    const [products, setProducts] = useState<ProductTally[]>(storage.stock)

    const categoryOptions: ReactElement[] = categoriesData.map((
        category: Category, 
        index: number
    ): ReactElement => {
        return (
            <option value={category.name} key={index}>
                {category.name}
            </option>
        )
    })

    const handleCategory: FormEventHandler = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        const categoryName: string = event.target.value
        const selectedCategory: Category = findCategoryByName(categoryName)
        const productsForCategory: ProductTally[] = findProductTalliesByCategory(selectedCategory, storage.stock)

        setCategory(selectedCategory)
        setProducts(productsForCategory)
    }

    return (
        <main>
            <h1>{category.name}</h1>

            <form onChange={handleCategory}>
                <label htmlFor='category'>Category</label>
                <select name='category'>
                    {categoryOptions}
                </select>
            </form>

            <ProductsList products={products} />
        </main>
    )
}

export default BrowsePage
