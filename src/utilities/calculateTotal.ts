import { Food } from '../interfaces'

function calculateTotal(
    foods: Food[]
): number {
    let total: number = 0

    foods.forEach((food: Food) => {
        total += food.price
    })

    return total
}

export default calculateTotal
