import React from "react";
import { withRouter, Redirect } from "react-router-dom";

function LoginButton({ history }) {
  function click() {
    setTimeout(() => {
      // 이동
      history.push("/");
    }, 1000);
  }
  return (
    <>
      <Redirect to="/"></Redirect>
      <button onClick={click}>로그인</button>
    </>
  );
}

export default withRouter(LoginButton);
