const CartItem = ({ item, removeFromCart, updateQty }) => {
  return <div className="card mb-3 p-3">
    <h6>{item.title}</h6>
    <p>₹ {item.price}</p>
    <input type="number" min="1" value={item.qty} className="form-control w-25 mb-2" onChange={e=>updateQty(item.id,Number(e.target.value))}/>
    <button className="btn btn-danger btn-sm" onClick={()=>removeFromCart(item.id)}>Remove</button>
  </div>
}
export default CartItem;
