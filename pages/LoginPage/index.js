import React, { useState, useEffect } from "react";
import Login from "../../comps/Login";
import axios from "axios";

let fakedb = [];

const LoginPage = () => {
  return (
    <div className="LoginPage">
        <img className="Loginheader" src="/headerimg.svg"/>
      <div className="contents">
        <Login />
      </div>
      <img className="Loginfooter" src="/footerimg.svg"/>
    </div>
  );
};

export default LoginPage;
