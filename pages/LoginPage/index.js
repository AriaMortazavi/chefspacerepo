import React, { useState, useEffect } from "react";
import Login from "../../comps/Login";
import axios from "axios";

let fakedb = [];

const LoginPage = () => {
  return (
    <div className="LoginPage">
        <img src="/headerimg.svg"/>
      <div className="contents">
        <Login />
      </div>
      <img className="footer" src="/footerimg.svg"/>
    </div>
  );
};

export default LoginPage;
