import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchPostsReq } from "../actions/PostsActions";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostReducer.posts);
  const error = useSelector((state) => state.PostReducer.err);

  useEffect(() => {
    dispatch(FetchPostsReq());
  }, []);

  return (
    <div id="posts">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>
          </div>
        );
      })}
      {error && <h1>{error}</h1>}
    </div>
  );
};
