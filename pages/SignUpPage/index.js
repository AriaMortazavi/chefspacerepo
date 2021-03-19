import React from "react";
import SignUp from "../../comps/SignUp";

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
        <img src="/headerimg.svg"/>
      <div className="signup_contents">
        <SignUp />
      </div>
      <img className="signup_footer" src="/footerimg.svg"/>
      </div>
  );
};

export default SignUpPage;
