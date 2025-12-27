import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [success,setSuccess]=useState(false);

  const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0);

  const handleOrder = () => {
    if(name && address){
      setCart([]);
      localStorage.removeItem("cart");
      setSuccess(true);
    } else alert("Fill all details");
  }

  if(success) return <h4>Order placed successfully! Thank you for shopping.</h4>;

  return (
    <div className="col-md-6 mx-auto">
      <h3>Checkout</h3>
      <p>Total: ₹ {total.toFixed(2)}</p>
      <input className="form-control mb-2" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
      <textarea className="form-control mb-2" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
      <button className="btn btn-success" onClick={handleOrder}>Place Order</button>
    </div>
  );
}
