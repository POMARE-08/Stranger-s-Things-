import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updatePost } from "../ajax-requests";

function UpdatePost({ posts }){
  const { postId } = useParams();
  const [post] = posts.filter((post) => post._id === postId )

  const { title, description, price, location, willDeliver } = post ? post : {}
  
  const [updatedTitle, setTitle] = useState(title)
  const [updatedDescription, setDescription] = useState(description)
  const [updatedPrice, setPrice] = useState(price)
  const [updatedLocation, setLocation] = useState(location)
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver)

  const handleSubmit = async (event) =>{
    event.preventDefault();
    updatePost(postId);
  }

  return(
    <>
    {post ? (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={updatedTitle}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input 
          type="text"
          value={updatedDescription}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <input 
          type="text"
          value={updatedPrice}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <input 
          type="text"
          value={updatedLocation}
          onChange={(ev) => setLocation(ev.target.value)}
        />
        <input 
          type="checkbox"
          checkded={updatedWillDeliver}
          onChange={(ev) => setWillDeliver(!updatedWillDeliver)}
        />
        <button type="submit">Save Changes</button>
    </form>
  ) : (
    <h1>Post Doesn't Exist</h1>
  )
}
  </>
  )
}
export default UpdatePost;