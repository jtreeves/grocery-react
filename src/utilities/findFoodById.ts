import { Food } from '../interfaces'
import foods from '../data/foods'

function findFoodById(
    id: string
): Food {
    const foundFoods: Food[] = foods.filter((food: Food) => {
        return food.id === id
    })

    return foundFoods[0]
}

export default findFoodById
