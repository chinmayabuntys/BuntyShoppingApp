import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if(login(email,password)) navigate("/");
    else alert("Invalid credentials");
  }

  return (
    <div className="col-md-4 mx-auto border p-3 rounded bg-warning">
      <h3>Login</h3>
      <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      <p className="mt-2">Don't have account? <Link to="/register">Register</Link></p>
    </div>
  );
}
