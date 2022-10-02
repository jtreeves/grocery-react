interface Food {
    id: string
    name: string
    image: string
    price: number
}

interface Category {
    name: string
    products: string[]
}

export type {
    Food,
    Category
}
