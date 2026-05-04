import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
} from "../constants/PostsConstants";
import axios from "axios";

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetPostFail = (err) => {
  return {
    type: FETCH_POSTS_FAIL,
    payload: err,
  };
};

export const FetchPostsReq = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(fetchPostSuccess(res.data));
    } catch (err) {
      dispatch(fetPostFail(err.message));
    }
  };
};
