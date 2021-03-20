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
import Post from '../../comps/Post';
import MessageBox from '../../comps/MessageBox';

let fakedb = [];

const Home = () => {
  return (
    <div className="Account">
      <NavHome />
      <div className="contents">

        <Post
          FullName="Gordon Ramsay"
          UserName="g.ramsay"
          profileSrc="https://b.thumbs.redditmedia.com/NAzeLE5Ca6fjDQhBFgL5Rtffo7datdqzUkY__3XnD2c.png"
          ratingSrc="hat3.svg"
          PostText="NEW! Creamy Tomato Soup with Mascarpone Recipe is up and ready for dinner tonight!"
          LinkUrl="http://ow.ly/54ul50Dy9Br"
          postImgSrc="https://saporitokitchen.com/wp-content/uploads/2021/02/tomato-soup-with-bread.jpg"
          TastyCount="123"
          NotTastyCount="45"
        />

        <Post
          FullName="Bobby Flay"
          UserName="b_flay"
          profileSrc="https://64.media.tumblr.com/avatar_bf60041fee99_128.pnj"
          ratingSrc="hat3.svg"
          PostText="Bacon egg and chocolate croque monsieur with blueberries"
          LinkUrl="https://helenscchin.com/2020/09"
          postImgSrc="https://helenscchin.files.wordpress.com/2020/09/bacon-egg-and-chocolate-croque-monsiuer-with-blueberries-.jpg"
          TastyCount="123"
          NotTastyCount="45"
        />
        
      </div>

      <MessageBox/>
      
    </div>
  );
};

export default Home;
