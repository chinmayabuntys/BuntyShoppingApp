import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { SearchContext } from "../context/SearchContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { searchText, category, priceRange, sortOrder } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  let filtered = products
    .filter(p => category === "all" || p.category === category)
    .filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  if (sortOrder === "asc") filtered.sort((a,b)=>a.price-b.price);
  if (sortOrder === "desc") filtered.sort((a,b)=>b.price-a.price);

  return (
    <div className="row">
      {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      {filtered.length===0 && <p>No products found.</p>}
    </div>
  );
}
