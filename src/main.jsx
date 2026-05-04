import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake.jsx";
import { Comments } from "./components/Comments.jsx";
import { Posts } from "./components/Posts.jsx";
import store from "./store.jsx";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/cake" element={<Cake></Cake>}></Route>
          <Route path="/comments" element={<Comments></Comments>}></Route>
          <Route path="/posts" element={<Posts></Posts>}></Route>
        </Route>
      </Routes>
    </Router>
  </Provider>,
);
