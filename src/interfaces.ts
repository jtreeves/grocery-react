interface Identification {
    id: string
}

interface Name {
    name: string
}

interface Product extends Identification, Name {
    image: string
    price: number
}

interface Category extends Name {
    products: string[]
}

interface ProductTally extends Identification {
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
    ProductTallyProp,
    Identification
}
