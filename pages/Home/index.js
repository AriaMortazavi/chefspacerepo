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

import { useRouter } from 'next/router';




const Home = () => {


  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const submitPost = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    const result = await axios.post('https://chefspace-backend.herokuapp.com/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    setImage(result.data.imagePath)
  }

  const [userName, setUsername] = useState(null);
  const [userLevel, setUserLevel] = useState(null);

  const tokenDecoder = async () => {
    var token = sessionStorage.getItem("token", token)
    var decodedUserInfo = jwt_decode(token)

    var decodedusername = decodedUserInfo.username
    setUserName(decodedusername);

    var decodeduserLevel = decodedUserInfo.level
    setUserLevel(decodeduserLevel);
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


  const router = useRouter()

  const headerAuth = async () => {
    const token = sessionStorage.getItem("token", token)
    const res = await axios.get("https://chefspace-backend.herokuapp.com/users",
    );
    if (token != null) {
      console.log("all good")
    } else {
      router.push({
        pathname: '../LoginPage',
      }
      )
    }
  }

  useEffect(() => {
    headerAuth();
  }, [])

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleTastyClicked = () => {
    setLikeCount(prevCount => prevCount + 1);
    console.log("Tasty");
  };

  const handleNotTastyClicked = () => {
    setDislikeCount(prevCount => prevCount + 1);
    console.log("Not Tasty");
  };

  return (
    <div className="Account">
      <NavHome />
      <div className="contents">

        <Post
          FullName="Gordon Ramsay"
          UserName={userName}
          profileSrc="https://b.thumbs.redditmedia.com/NAzeLE5Ca6fjDQhBFgL5Rtffo7datdqzUkY__3XnD2c.png"
          ratingSrc={userLevel}
          PostText={setDescription}
          // LinkUrl="http://ow.ly/54ul50Dy9Br"
          postImgSrc={setImage}
          TastyCount={likeCount}
          tastyClicked={handleTastyClicked}
          NotTastyCount={dislikeCount}
          notTastyClicked={handleNotTastyClicked}
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

      <MessageBox submit={submitPost} onChangeUpload={e => setFile(e.target.files[0])} onChangeDescription={e => setDescription(e.target.value)} />

    </div>
  );
};

export default Home;
