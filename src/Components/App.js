import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Register, Posts, Login, CreatePost, Nav, UpdatePost } from "./"
import { fetchPosts, myData } from "../ajax-requests";


function App(){

  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function tokenCheck(){
    if(window.localStorage.getItem("token")){
      setToken(window.localStorage.getItem("token"))
    }
  }

async function getPosts(){
  const results =  (await fetchPosts());
    if(results.sucess){
      setPosts(results.data.posts)
    }
}

async function getMyData(){
 const results = await getMyData(token)
  if(results.sucess){
    setUser(results.data)
  }
}

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    getPosts();
    if (token){
      getMyData();
    }
  }, [token])



return(
  <div> 
    <Nav setToken={setToken} />
    <Routes>
      <Route 
        path="/" 
        element={<Posts posts={posts}/>} 
          />
      <Route 
        path="/register" 
        element={<Register setToken={setToken} navigate={navigate}/>}
        />
      <Route 
        path="/login"
        element={<Login setToken={setToken} navigate={navigate}/>}
        />

    <Route 
        path="/create-post"
        element={<CreatePost token={token} getPosts={getPosts} />}
     />

    <Route
      path="/update-post/:postId" 
      element={< UpdatePost posts={posts}/>}
      />

    </Routes>
  </div>
  
  )

}
export default App;