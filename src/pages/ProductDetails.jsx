import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h4>Loading...</h4>;

  return (
    <div className="row">
      <div className="col-md-5">
        <img src={product.image} className="img-fluid" />
      </div>
      <div className="col-md-7">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>₹ {product.price}</h4>
        <div className="d-flex gap-2 mb-2">
          <input type="number" className="form-control w-25" min="1" value={qty} onChange={e=>setQty(Number(e.target.value))}/>
          <button className="btn btn-success" onClick={()=>addToCart(product, qty)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
