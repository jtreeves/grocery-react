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

interface FoodStock extends Food {
    items: number
}

interface Storage {
    cart: Food[]
    stock: FoodStock[]
}

export type {
    Food,
    Category,
    FoodStock,
    Storage
}
