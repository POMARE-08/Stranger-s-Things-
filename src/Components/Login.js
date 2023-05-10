import React, { useState } from "react";
import { login } from "../ajax-requests";

function Login({ setToken, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    
    const user = { username, password };
  
    try {
      const results = await login(user);
  
      if (results.success) {
        setToken(results.data.token);
        window.localStorage.setItem("token", results.data.token);
        setSuccessMessage("Login successful!");
        setUsername("");
        setPassword("");
        navigate('/'); // <-- redirect to root URL
      } else {
        setErrorMessage(results.error.message);
      }
    } catch (error) {
      setErrorMessage("Network error");
    }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
