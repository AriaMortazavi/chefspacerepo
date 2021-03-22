import React from "react";
import Signup from "../../comps/Signup";

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
        <img className="signup_header" src="/headerimg.svg"/>
      <div className="signup_contents">
        <Signup />
      </div>
      <img className="signup_footer" src="/footerimg.svg"/>
      </div>
  );
};

export default SignUpPage;
