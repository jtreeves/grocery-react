import { useState } from 'react'
import { Product } from '../../interfaces'
import ProductsList from '../ProductsList/ProductsList'
import productsData from '../../data/products'
import categoriesData from '../../data/categories'

function Products(): JSX.Element {
    const [category, setCategory] = useState<string>('All Products')
    const [products, setProducts] = useState<Product[]>(productsData)

    const handleCategory = (event: any) => {
        setCategory(event.target.value)
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
            <h1>{category}</h1>

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
