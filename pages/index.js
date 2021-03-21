import React, { useState, useEffect } from 'react';
import LooginPage from "./LoginPage"
import Template from "../comps/Template";
import Post from '../comps/Post';

import axios from 'axios';

let fakedb = [

]

const MainPage = () => {

  return (
    <div className="main">
      <LooginPage />
      
      <Template></Template>

      {/* <Post> </Post> */}
    
    </div>
  );
};

export default MainPage;