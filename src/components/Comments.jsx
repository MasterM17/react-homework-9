import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "./../actions/CommentsActions";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const greska = useSelector((state) => state.CommentsReducer.err);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, []);

  return (
    <div id="comments">
      {comments.map((comm) => {
        return (
          <div key={comm.id}>
            <p>
              <span>Name: </span>
              {comm.name}
            </p>
            <p>
              <span>Email: </span>
              {comm.email}
            </p>
            <p>
              <span>Body: </span>
              {comm.body}
            </p>
          </div>
        );
      })}
      {greska && <h1>{greska}</h1>}
    </div>
  );
};
