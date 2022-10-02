import { useState } from 'react'
import { Product } from '../../interfaces'
import ProductsList from '../ProductsList/ProductsList'
import productsData from '../../data/products'
import categoriesData from '../../data/categories'

function Products(): JSX.Element {
    const [category, setCategory] = useState<string>('All Products')
    const [products, setProducts] = useState<Product[]>(productsData)

    return (
        <>
            <h1>Products</h1>

            <ProductsList products={products} />
        </>
    )
}

export default Products
