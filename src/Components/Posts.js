import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Posts({ posts, isLoggedIn }) {
  return (
    <>
      {isLoggedIn &&
        posts &&
        posts.map((post) => {
          return (
            <Fragment key={post._id}>
              {post.isAuthor ? (
                <>
                  <p>{post.title}</p>
                  <Link to={`/update-post/${post_id}`}>
                    <button>Update Post</button>
                  </Link>
                  <button>Delete</button>
                </>
              ) : (
                <>
                  <p>{post.title}</p>
                  <button>Send Message</button>
                </>
              )}
            </Fragment>
          );
        })}
    </>
  );
}

export default Posts;
