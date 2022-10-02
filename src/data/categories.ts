import { Category } from '../interfaces'
import listAllProductIds from '../utilities/listAllProductIds'

const categories: Category[] = [
    {
        name: 'All Products',
        products: listAllProductIds()
    },
    {
        name: 'Alcohol',
        products: [
            'BER002',
            'CMP773',
            'WNE821'
        ]
    },
    {
        name: 'Breads',
        products: [
            'BGL002',
            'BGT819',
            'CRT672',
            'LOF026',
            'WFL330'
        ]
    },
    {
        name: 'Dairy',
        products: [
            'BTR721',
            'CHS337',
            'MLK922'
        ]
    },
    {
        name: 'Desserts',
        products: [
            'CHT157',
            'CKE207',
            'CPK183',
            'ICM449',
            'PIE991'
        ]
    },
    {
        name: 'Fruits',
        products: [
            'APL179',
            'BNA876',
            'GRP372',
            'LMN220',
            'PCH401',
            'PER487',
            'STB270',
            'WMN621'
        ]
    },
    {
        name: 'Meats',
        products: [
            'CKN081',
            'PRK125',
            'STK893'
        ]
    },
    {
        name: 'Seafood',
        products: [
            'CRB703',
            'LBR115',
            'OYR832',
            'SHP763'
        ]
    },
    {
        name: 'Toiletries',
        products: [
            'LTN002',
            'RZR722',
            'SOP993',
            'TLP814'
        ]
    },
    {
        name: 'Vegetables',
        products: [
            'AVD819',
            'BRC180',
            'CRT116',
            'CRN529',
            'LTC571',
            'ONN611'
        ]
    }
]

export default categories
