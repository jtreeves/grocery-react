import {
    ChangeEvent, 
    FormEventHandler,
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
import SelectCategory from './SelectCategory'

function BrowsePage(): JSX.Element {
    const [storage] = useContext<StorageContext>(GlobalStorage)
    const [category, setCategory] = useState<Category>(categoriesData[0])
    const [products, setProducts] = useState<ProductTally[]>(storage.stock)

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

            <SelectCategory 
                handleCategory={handleCategory} 
            />

            <ProductsList 
                products={products} 
            />
        </main>
    )
}

export default BrowsePage
