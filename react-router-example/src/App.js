import React from "react";
// component를 가져옴
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import Login from "./pages/Login";

import withAuth from "./hocs/withAuth";

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Switch>
        <Route path="/profile/:id" component={withAuth(Profile)} />
        <Route path="/profile" exact component={withAuth(Profile)} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
