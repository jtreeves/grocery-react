import {
    createContext,
    Context,
    Dispatch,
    SetStateAction
} from 'react'

interface GenericObject {
    [key: string]: any
}

type StorageContext = [
    GenericObject,
    Dispatch<SetStateAction<GenericObject>>
]

const GlobalStorage: Context<StorageContext> = createContext<StorageContext>([
    {},
    () => {}
])

export default GlobalStorage
