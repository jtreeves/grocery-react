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

interface ProductTally extends Product {
    tally: number
}

interface Storage {
    cart: ProductTally[]
    stock: ProductTally[]
}

interface ProductProp {
    product: Product
}

interface ProductsProp {
    products: Product[]
}

interface ProductTallyProp {
    product: ProductTally
}

interface ProductsTallyProp {
    products: ProductTally[]
}

export type {
    Product,
    Category,
    ProductTally,
    Storage,
    ProductProp,
    ProductsProp,
    ProductsTallyProp,
    ProductTallyProp
}
