import { Category } from '../interfaces'
import listAllProductIds from '../utilities/listAllProductIds'

const categories: Category[] = [
    {
        name: 'All Products',
        products: listAllProductIds()
    },
    {
        name: 'fruits',
        products: [
            'APL179',
            'GRP372',
            'MLN445'
        ]
    },
    {
        name: 'vegetables',
        products: [
            'CRT116',
            'CRN529',
            'BRC180'
        ]
    },
    {
        name: 'breads',
        products: [
            'BRD026',
            'CRT672',
            'BGL002'
        ]
    },
    {
        name: 'dairy',
        products: [
            'CHS337',
            'BTR721',
            'MLK922'
        ]
    },
    {
        name: 'meats',
        products: [
            'CKN081',
            'PRK125',
            'STK893'
        ]
    },
    {
        name: 'sweets',
        products: [
            'ICM449',
            'CKE207',
            'CPK183'
        ]
    },
    {
        name: 'alcohol',
        products: [
            'CMP773',
            'WNE821',
            'BER002'
        ]
    },
]

export default categories
