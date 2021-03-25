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
import { useRouter } from 'next/router';
import jwt_decode from "jwt-decode";


const Account = () => {

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userLevel, setUserLevel] = useState(null);

const router = useRouter()

const tokenDecoder = async () => {
var token = sessionStorage.getItem("token", token)
var decodedUserInfo = jwt_decode(token)

var decodedusername = decodedUserInfo.username
setUserName(decodedusername);

var decodedEmail = decodedUserInfo.email
setUserEmail(decodedEmail);

var decodeduserLevel = decodedUserInfo.level
setUserLevel(decodeduserLevel);
}


const headerAuth = async () => {
const token =  sessionStorage.getItem("token", token)
const res = await axios.get("https://chefspace-backend.herokuapp.com/users"
);
if (token != null){
  console.log("all good")
}else{
  router.push({
    pathname: '../LoginPage',
}
)}
}

useEffect(() => {
  headerAuth();
  tokenDecoder();
}, [])

  return (
    <div className="Account">
      <NavAccount />
      <div className="contents">
      <br></br>
        <AccountImg userName ={userName} userEmail ={userEmail} userlevel ={userLevel}/>
      </div>
    </div>
  );
};

export default Account;
