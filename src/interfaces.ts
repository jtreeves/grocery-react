interface Product {
    id: string
    name: string
    image: string
    price: number
}

interface Category {
    name: string
    products: string[]
}

interface ProductStock extends Product {
    items: number
}

interface Storage {
    cart: Product[]
    stock: ProductStock[]
}

export type {
    Product,
    Category,
    ProductStock,
    Storage
}
