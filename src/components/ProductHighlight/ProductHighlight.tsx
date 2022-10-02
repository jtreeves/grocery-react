import { ProductProp } from '../../interfaces'

function ProductHighlight({
    product
}: ProductProp): JSX.Element {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.image}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductHighlight
