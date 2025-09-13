import "./ProductCard.css";

function ProductCard({ Product }) {
    return ( 
        <div className="Containermain">
            <p>{Product.ProductName}</p>
            <p>{Product.Price}</p>
            
                {Product.isinstock ? <p className="instock">isinstock</p> : <p className="outstock">out of stock</p>}
        </div>
    );
}

export default ProductCard;