import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hats from "../../comps/Hats";
import NavAccount from "../../comps/NavAccount";
import Logout from "../../comps/Logout";
import AccountImg from "../../comps/AccountImg";
import FormButtons from "../../comps/FormButtons";
import Input from "../../comps/Input";
import NavHome from "../../comps/NavHome";
import Post from '../../comps/Post';
import MessageBox from '../../comps/MessageBox';
import axios from "axios";

let fakedb = [];


const Home = () => {

  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const submitPost = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    const result = await axios.post('https://chefspace-backend.herokuapp.com/images', formData, { headers: {'Content-Type':'multipart/form-data'}})
    setImage(result.data.imagePath)
  }
  
  // const [postDescription, setDescription] = useState(null);
  // const [postImage, setImage] = useState(null);
  // const [postLikes, setLikes] = useState(null);
  // const [postDislikes, setDislikes] = useState(null);

  // const sendPost = async () => {
  //   console.log(description);
  //   console.log(image);
  //   console.log(likes);
  //   console.log(dislikes);

  //   const res = await axios.post("https://chefspace-backend.herokuapp.com/posts", {description: postDescription, image: postImage, likes: postLikes, dislikes: postDislikes});

  //   console.log(res);
  // }
  
  return (
    <div className="Account">
      <NavHome />
      <div className="contents">

      <Post
          FullName="Gordon Ramsay"
          UserName="g.ramsay"
          profileSrc="https://b.thumbs.redditmedia.com/NAzeLE5Ca6fjDQhBFgL5Rtffo7datdqzUkY__3XnD2c.png"
          ratingSrc="hat3.svg"
          PostText={setDescription}
          // LinkUrl="http://ow.ly/54ul50Dy9Br"
          postImgSrc={setImage}
          TastyCount="0"
          NotTastyCount="0"
        />

        {/* <Post
          FullName="Gordon Ramsay"
          UserName="g.ramsay"
          profileSrc="https://b.thumbs.redditmedia.com/NAzeLE5Ca6fjDQhBFgL5Rtffo7datdqzUkY__3XnD2c.png"
          ratingSrc="hat3.svg"
          PostText="NEW! Creamy Tomato Soup with Mascarpone Recipe is up and ready for dinner tonight!"
          LinkUrl="http://ow.ly/54ul50Dy9Br"
          postImgSrc="https://saporitokitchen.com/wp-content/uploads/2021/02/tomato-soup-with-bread.jpg"
          TastyCount="123"
          NotTastyCount="45"
        /> */}

        {/* <Post
          FullName="Bobby Flay"
          UserName="b_flay"
          profileSrc="https://64.media.tumblr.com/avatar_bf60041fee99_128.pnj"
          ratingSrc="hat3.svg"
          PostText="Bacon egg and chocolate croque monsieur with blueberries"
          LinkUrl="https://helenscchin.com/2020/09"
          postImgSrc="https://helenscchin.files.wordpress.com/2020/09/bacon-egg-and-chocolate-croque-monsiuer-with-blueberries-.jpg"
          TastyCount="123"
          NotTastyCount="45"
        /> */}
        
      </div>

      <MessageBox submit={submitPost} onChangeUpload={e => setFile(e.target.files[0])} onChangeDescription={e => setDescription(e.target.value)}/>
      
    </div>
  );
};

export default Home;
