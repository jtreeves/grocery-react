import { useState } from 'react'
import { Category, Product } from '../../interfaces'
import ProductsList from '../ProductsList/ProductsList'
import productsData from '../../data/products'
import categoriesData from '../../data/categories'
import findProductsByCategory from '../../utilities/findProductsByCategory'
import findCategoryByName from '../../utilities/findCategoryByName'

function Products(): JSX.Element {
    const [category, setCategory] = useState<Category>(categoriesData[0])
    const [products, setProducts] = useState<Product[]>(productsData)

    const handleCategory = (event: any) => {
        const categoryName: string = event.target.value
        const selectedCategory: Category = findCategoryByName(categoryName)
        const productsForCategory: Product[] = findProductsByCategory(selectedCategory)
        setCategory(selectedCategory)
        setProducts(productsForCategory)
    }

    const categoryOptions = categoriesData.map((category, index) => {
        return (
            <option value={category.name} key={index}>
                {category.name}
            </option>
        )
    })

    return (
        <>
            <h1>{category.name}</h1>

            <form onChange={handleCategory}>
                <label htmlFor='category'>Category</label>
                <select name='category'>
                    {categoryOptions}
                </select>
            </form>

            <ProductsList products={products} />
        </>
    )
}

export default Products
