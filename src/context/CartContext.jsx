import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const saveCart = (newCart) => { 
    setCart(newCart); 
    localStorage.setItem("cart", JSON.stringify(newCart)); 
  };

  const addToCart = (product, qty=1) => {
    const exist = cart.find(item => item.id === product.id);
    if (exist) saveCart(cart.map(item => item.id===product.id?{...item,qty:item.qty+qty}:item));
    else saveCart([...cart,{...product,qty}]);
  };

  const updateQty = (id, qty) => saveCart(cart.map(item=>item.id===id?{...item,qty}:item));
  const removeFromCart = (id) => saveCart(cart.filter(item=>item.id!==id));

  return <CartContext.Provider value={{cart,addToCart,updateQty,removeFromCart}}>{children}</CartContext.Provider>;
};
