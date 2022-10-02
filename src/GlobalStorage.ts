import {
    createContext,
    Context
} from 'react'
import { StorageContext } from './types'

const GlobalStorage: Context<StorageContext> = createContext<StorageContext>([
    {
        cart: [],
        stock: []
    },
    () => {}
])

export default GlobalStorage
