import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hats from "../../comps/Hats";
import NavAccount from "../../comps/NavAccount";
import Logout from "../../comps/Logout";
import AccountImg from "../../comps/AccountImg";
import FormButtons from "../../comps/FormButtons";
import Input from "../../comps/Input";
import NavHome from "../../comps/NavHome";
import axios from "axios";

let fakedb = [];

const Account = () => {
  return (
    <div className="Account">
      <NavAccount />
      <div className="contents">
      <br></br>
        <AccountImg />
        <Input text="Username" placeholder="" />
        <Input text="Email" placeholder="" />
        <br></br>
        <Hats text="Change Skill Level" />
        <br></br><br></br><br></br>
        <FormButtons text="Save Changes" /> 
      </div>
      <div className="logout">
        <Logout />
      </div>
    </div>
  );
};

export default Account;
