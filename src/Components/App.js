import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Register, Posts, Login, CreatePost, Nav, UpdatePost } from "./"
import { fetchPosts, myData } from "../ajax-requests";

function App() {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function tokenCheck() {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
  }

  // async function addNewPost(newPost) {
  //   setPosts([...posts, newPost])
  // }

  async function getPosts() {
    const results = await fetchPosts();
    if (results.success) {
      setPosts(results.data.posts);
    }
  }

  async function getMyData() {
    const results = await myData(token);
    if (results.success) {
      setUser(results.data);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    getPosts();
    if (token) {
      getMyData();
    }
  }, [token]);

  return (
    <div>
      <Nav setToken={setToken} isLoggedIn={token !== ""} />
      <Routes>
        <Route path="/" element={<Posts posts={posts} isLoggedIn={token !== ""} />} />
        <Route
          path="/register"
          element={<Register setToken={setToken} navigate={navigate} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} navigate={navigate} />}
        />
        <Route
          path="/create-post"
          element={<CreatePost
                      token={token}
                      getPosts={getPosts}
                      setPosts={setPosts}
                  />}
        />
        <Route
          path="/update-post/:postId"
          element={<UpdatePost posts={posts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
