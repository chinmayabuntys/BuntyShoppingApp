import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price*item.qty, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length===0 && <p>Cart is empty. <Link to="/">Go shopping</Link></p>}
      {cart.map(item=>(
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQty={updateQty} />
      ))}
      {cart.length>0 && <h4>Total: ₹ {total.toFixed(2)}</h4>}
      {cart.length>0 && <Link to="/checkout" className="btn btn-primary mt-2">Proceed to Checkout</Link>}
    </div>
  );
}
