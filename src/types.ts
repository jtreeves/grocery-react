import {
    Dispatch,
    SetStateAction
} from 'react'
import { Storage } from './interfaces'

type StorageContext = [
    Storage,
    Dispatch<SetStateAction<Storage>>
]

export type {
    StorageContext
}
