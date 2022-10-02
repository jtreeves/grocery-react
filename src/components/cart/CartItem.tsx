import { ProductTallyProp } from '../../interfaces'

function CheckoutProduct({
    product
}: ProductTallyProp): JSX.Element {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.tally}</p>
        </div>
    )
}

export default CheckoutProduct
