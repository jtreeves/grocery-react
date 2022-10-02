import {
    createContext,
    Context,
    Dispatch,
    SetStateAction
} from 'react'
import { Storage } from './interfaces'

type StorageContext = [
    Storage,
    Dispatch<SetStateAction<Storage>>
]

const GlobalStorage: Context<StorageContext> = createContext<StorageContext>([
    {
        cart: [],
        stock: []
    },
    () => {}
])

export default GlobalStorage
