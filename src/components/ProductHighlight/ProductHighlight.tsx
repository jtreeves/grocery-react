import { ProductProp } from '../../interfaces'

function ProductHighlight({
    product
}: ProductProp): JSX.Element {
    return (
        <div>{product.name}</div>
    )
}

export default ProductHighlight
