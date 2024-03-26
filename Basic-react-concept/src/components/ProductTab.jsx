import Product from "./Product";
import "./Product.css"

function ProductTab(){
    return (
        <div className="Products">
            <Product title="Laptop" price={44343} />
            <Product title="Moblie" price={4343} />
            <Product title="I-Pad" price={114343} />

        </div>
    )
}

export default ProductTab;