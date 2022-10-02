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

interface ProductProp {
    product: Product
}

interface ProductsProp {
    products: Product[]
}

export type {
    Product,
    Category,
    ProductStock,
    Storage,
    ProductProp,
    ProductsProp
}
