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


const Account = () => {


const [newUserInfo, setNewUserInfo] = useState(null);
const [newEmailInfo, setNewEmailInfo] = useState(null);
const [newLevelInfo, setNewLevelInfo] = useState(null);


const ChangeInfoHandler = async () => {
  console.log(newUserInfo);
  console.log(newEmailInfo);
  console.log(newLevelInfo);
const res = await axios.post("https://chefspace-backend.herokuapp.com/users", {
username: newUserInfo, email: newEmailInfo, level: newLevelInfo
  }
);
alert("Info has been updated")
}

  return (
    <div className="Account">
      <NavAccount />
      <div className="contents">
      <br></br>
        <AccountImg />
        <Input onChange={(e) => setNewUserInfo(e.target.value)} text="Username" placeholder="" />
        <Input onChange={(e) => setNewEmailInfo(e.target.value)} text="Email" placeholder="" />
        <br></br>
        <Hats onChange={(e) => setNewLevelInfo(e.target.value)} text="Change Skill Level" />
        <br></br><br></br><br></br>
        <FormButtons onClick={ChangeInfoHandler} text="Save Changes" /> 
      </div>
      <div className="logout">
        <Logout />
      </div>
    </div>
  );
};

export default Account;
