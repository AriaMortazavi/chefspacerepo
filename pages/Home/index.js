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

const Home = () => {
  return (
    <div className="Account">
      <NavHome />
      <div className="contents">

        
      </div>
      
    </div>
  );
};

export default Home;
