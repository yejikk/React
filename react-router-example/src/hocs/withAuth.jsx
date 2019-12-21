import React from "react";
import { Redirect } from "react-router-dom";

// component - function or class
export default function withAuth(Component) {
  return function AnotherComponent(props) {
    const token = localStorage.getItem("token");

    if (token === null) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <>
        <Component {...props} token={token} />
      </>
    );
  };
}
