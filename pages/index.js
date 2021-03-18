import React, { useState, useEffect } from 'react';
import LooginPage from "./LoginPage"

import axios from 'axios';

let fakedb = [

]

const MainPage = () => {

  return (
    <div className="main">
      <LooginPage />
    </div>
  );
};

export default MainPage;