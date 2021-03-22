import React, { useState, useEffect } from 'react';
import LoginPage from "./LoginPage"
import Post from '../comps/Post';

import axios from 'axios';

let fakedb = [

]

const MainPage = () => {

  return (
    <div className="main">
      <LoginPage />
      

      {/* <Post> </Post> */}
    
    </div>
  );
};

export default MainPage;