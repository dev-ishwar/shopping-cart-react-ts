import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"

type PropsTypes = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsTypes): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;
    console.log('img src: ', img);

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
    const itemInCart = inCart ? ' → Item in Cart: ✅' : null;

    const content =
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
                {itemInCart}
            </p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>


    return content;
}

const areProductsEqual = ({ product: prevProduct, inCart: prevInCart }: PropsTypes, { product: nextProduct, inCart: nextInCart }: PropsTypes) => {
    return Object
        .keys(prevProduct)
        .every(key => {
            return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
                && prevInCart === nextInCart
        })
}

const memoizedProduct = memo<typeof Product>(Product, areProductsEqual);
export default memoizedProduct;