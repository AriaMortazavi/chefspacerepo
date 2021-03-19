import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Input from '../Input';
import FormButtons from '../FormButtons';
import BeginerButton from '../BeginerButton';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useHistory } from 'react-router-dom';

const SignUpBox = styled.form`
    max-width: 100%;
    max-height: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: center;
`;

const Login_title = styled.h1`
    color: #EF7E5B;
    font-size: 36px;
    margin-bottom: 10px;
`;

const Login_new = styled.p`
    color: #EF7E5B;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    justify-content: left;
    text-align: left;
`;

const LevelBtns = styled.div`
    display: flex;
    align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  border-radius: 20px 20px 0px 0px;
`;


const Signup = ({}) => {

  const router = useRouter()

    const [usernameInfo, setUsernameInfo] = useState(null);
    const [emailInfo, setEmailInfo] = useState(null);
    const [passwordInfo, setPasswordInfo] = useState(null);
    const [levelInfo, setLevelInfo] = useState(null);

    const history = useHistory();

    const SignUpHandler = async () => {
        console.log(usernameInfo);
        console.log(passwordInfo);
        console.log(emailInfo);
        console.log(levelInfo);
      const res = await axios.post("https://chefspace-backend.herokuapp.com/api/users", {
      email: emailInfo, password: passwordInfo, username: usernameInfo, level: levelInfo
    });
    console.log(res);
    if (res.data !== "Incorrect credentials"){
      const token = res.data;
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common['Authorization'] = token;
      router.push({
        pathname: '../LoginPage',
      })
    }else{
      alert("Can't Log In")
    }
  }

    useEffect(() => {
    
    }, []);

    return  <SignUpBox>
        <Container>
        <Login_title>Sign Up</Login_title>
        <Input onChange={(e) => setUsernameInfo(e.target.value)} placeholder={"Username"} text="Username" type="text" />
      <Input onChange={(e) => setEmailInfo(e.target.value)} placeholder={"Email"} text="Email" type="text" />
      <Input onChange={(e) => setPasswordInfo(e.target.value)} placeholder={"Password"} text="Password" type="Password" />
    </Container>
    <Login_new>Choose your skill level</Login_new>
   <LevelBtns> <BeginerButton onChange={(e) => setLevelInfo(e.target.value)} /></LevelBtns>
   
    <FormButtons onClick={SignUpHandler} type="button" text={"Sign Up"}></FormButtons>
 </SignUpBox>
 
}
Signup.defaultProps = {
  }

export default Signup;