import { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";

const ProductList = () => {
    const { cart, REDUCER_ACTIONS, dispatch } = useCart();
    const { products } = useProducts();

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

    if(products?.length) {
        pageContent = products.map(product => {
            const inCart = cart.some(item => item.sku === product.sku);

            return (
                <Product 
                    key={product.sku}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    product={product}
                    inCart={inCart}
                />
            )
        })
    }

    const content = (
        <main className="main main--products">
            {pageContent}
        </main>
    )

    return content;
}

export default ProductList;