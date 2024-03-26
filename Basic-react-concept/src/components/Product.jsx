import "./Product.css"
function Product({title,price}){

    // apply dynamic component styling 
    let isDiscount=price >44000;
    let color={backgroundColor: isDiscount ? "gray" : null}
    return (
        <div className="product" style={color}>
            <h4>{title}</h4>
           {price}
            <p>
                {isDiscount && <p>Discount 5 %</p>}
            </p>
        </div>
    )

}

export default  Product;