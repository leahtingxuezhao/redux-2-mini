import axios from "axios";

const initialState = {
  loading: false,
  articles: [],
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const requestArticles = () => {
  return {
    payload: axios.get("api/hacker-news").then((res) => {
      console.log(res);
      return res.data;
    }),
    type: REQUEST_ARTICLES,
  };

  // let articles = axios.get("api/hacker-news").then((res) => res.data);
  // return {
  //   type: REQUEST_ARTICLES,
  //   payload: articles,
  // };
};

export default function reducer(state, action) {
  state = state || initialState;
  switch (action.type) {
    case REQUEST_ARTICLES + "_PENDING":
      //why I don't use {state.articles, loading: true}
      return { articles: state.articles, loading: true };
    case REQUEST_ARTICLES + "_FULFILLED":
      return { loading: false, articles: action.payload };
    case REQUEST_ARTICLES + "_REJECTED":
      return { ...state, loading: false };

    default:
      return state;
  }
}
