import { useContext,useEffect,useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

export default function Header(){
  const {darkMode,toggleDarkMode}=useContext(ThemeContext);
  const {user,logout}=useContext(AuthContext);
  const {cart}=useContext(CartContext);
  const {searchText,setSearchText}=useContext(SearchContext);
  const [allProducts,setAllProducts]=useState([]);
  const [showSuggest,setShowSuggest]=useState(false);

  useEffect(()=>{ fetch("https://fakestoreapi.com/products").then(r=>r.json()).then(setAllProducts); },[]);

  const suggestions=allProducts.filter(p=>p.title.toLowerCase().startsWith(searchText.toLowerCase())).slice(0,5);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode?"navbar-dark bg-dark":"navbar-dark bg-primary"} px-4`}>
      <Link className="navbar-brand fw-bold" to="/">BuntyShopping</Link>
      <div className="ms-auto d-flex align-items-center">
        <button className="btn btn-outline-light me-2" onClick={toggleDarkMode}>{darkMode?"Light Mode":"Dark Mode"}</button>
        {user?<>
          <span className="text-light me-2">Hi, {user.name}</span>
          <button className="btn btn-warning me-2" onClick={logout}>Logout</button>
        </>:<Link className="btn btn-light me-2" to="/login">Login</Link>}
        <div className="position-relative me-2">
          <input className="form-control" placeholder="Search..." value={searchText} 
            onChange={e=>{ setSearchText(e.target.value); setShowSuggest(true); }} 
            onBlur={()=>setTimeout(()=>setShowSuggest(false),200)}
          />
          {showSuggest && searchText && <div className="suggestions bg-white border position-absolute w-100">
            {suggestions.map(p=><Link key={p.id} to={`/product/${p.id}`} className="d-block p-2 text-dark" onClick={()=>setShowSuggest(false)}>🔍 {p.title}</Link>)}
          </div>}
        </div>
        <Link className="btn btn-light" to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
