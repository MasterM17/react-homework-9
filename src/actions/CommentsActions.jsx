import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../constants/CommentsConstants";
import axios from "axios";

export const fetchCommentsSuccess = (comments) => {
  //array(500) <- comments
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (err) => {
  //alert na eror-ot
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: err,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments") // povik do url
      .then((res) => dispatch(fetchCommentsSuccess(res.data)))
      .catch((err) => dispatch(fetchCommentsFail(err.message)));
  };
};
