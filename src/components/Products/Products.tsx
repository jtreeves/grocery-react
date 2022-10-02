import { useState } from 'react'
import { Category, Product } from '../../interfaces'
import ProductsList from '../ProductsList/ProductsList'
import productsData from '../../data/products'
import categoriesData from '../../data/categories'
import findProductById from '../../utilities/findProductById'

function Products(): JSX.Element {
    const [category, setCategory] = useState<Category>(categoriesData[0])
    const [products, setProducts] = useState<Product[]>(productsData)

    const handleCategory = (event: any) => {
        const categoryName: string = event.target.value
        const selectedCategory: Category = categoriesData.filter((category) => {
            return category.name === categoryName
        })[0]
        const productsForCategory: Product[] = selectedCategory.products.map((productId) => {
            return findProductById(productId)
        })
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
