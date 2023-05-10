import React from "react";
import { Link } from "react-router-dom";

function Nav({ setToken, isLoggedIn }) {
  function logout() {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <div>
      <nav>
        <h1>Welcome to Stranger's Things!</h1>
        {isLoggedIn ? (
          <>
            <button>
              <Link to="/create-post">Create Post</Link>
            </button>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </nav>
    </div>
  );
}

export default Nav;