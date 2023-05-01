import React from "react";
import { Link } from "react-router-dom";

function Nav({ setToken }){
  function logout(){
    setToken("")
    window.localStorage.removeItem("token")
  }
  return(
    <div>
      <nav>
        <h1>Welcome to Stranger's Things!</h1>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/register">Register</Link></button>
        <button onClick={logout}>Log Out</button>
      </nav>
    </div>
  )
}

export default Nav