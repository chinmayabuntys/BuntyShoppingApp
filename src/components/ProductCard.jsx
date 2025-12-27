import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="col-md-3 mb-4">
      <div className="card p-2 h-100">
        <Link to={`/product/${product.id}`}><img src={product.image} className="img-fluid" height="150"/></Link>
        <h6>{product.title}</h6>
        <p>₹ {product.price}</p>
        <button className="btn btn-success btn-sm" onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
