import React from "react";
// component를 가져옴
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
