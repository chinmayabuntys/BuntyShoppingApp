import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    if(name && email && password){
      if(register(name,email,password)) navigate("/");
      else alert("Email already exists");
    } else alert("Fill all fields");
  }

  return (
    <div className="col-md-4 mx-auto border p-3 rounded bg-warning">
      <h3>Register</h3>
      <input className="form-control mb-2" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className="btn btn-success" onClick={handleRegister}>Register</button>
      <p className="mt-2">Already have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
