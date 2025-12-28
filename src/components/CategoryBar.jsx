import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
export default function CategoryBar(){
  const {setCategory}=useContext(SearchContext);
  const categories=["all","electronics","jewellery","men's clothing","women's clothing"];
  return <div className="d-flex justify-content-center gap-3 mt-3 category">
    {categories.map(c=> <span key={c} onClick={()=>setCategory(c)}>{c.charAt(0).toUpperCase()+c.slice(1)}</span>)}
  </div>
}
