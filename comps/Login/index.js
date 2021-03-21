import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Input from '../Input';
import FormButtons from '../FormButtons';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useHistory } from 'react-router-dom';

const LoginBox = styled.form`
    max-width: 100%;
    max-height: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: center;
`;

const Logo_icon = styled.img`
    width: 60%;
    display: flex;
`;

const Login_title = styled.h1`
    color: #EF7E5B;
    font-size: 36px;
    margin-bottom: 20px;
`;

const Login_new = styled.p`
    color: #EF7E5B;
    font-size: 16px;
    margin-bottom: 20px;
    display: flex;
    text-align: left;
    cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  border-radius: 20px 20px 0px 0px;
`;

const Login = ({}) => {
  const router = useRouter()

    const [emailInfo, setEmailInfo] = useState(null);
    const [passwordInfo, setPasswordInfo] = useState(null);

    const history = useHistory();

    const LogInHandler = async () => {
      const res = await axios.post("http://localhost:8080/api/users/login", {
      email: emailInfo, password: passwordInfo
    });
    console.log(res);
    if (res.email !== "Cannot find user"){
      const token = res.data.accesssToken;
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common['Authorization'] = token;
      {router.push({
        pathname: '../Home',
      })}
    }else{
      alert("Can't Log In")
    }
  }

    return  <LoginBox>
        <Logo_icon src="/CSLogo.svg"></Logo_icon>
        <Container>
        <Login_title>Login</Login_title>
      <Input onChange={(e) => setEmailInfo(e.target.value)} placeholder={"Email"} text="Email" type="text" />
      <Input onChange={(e) => setPasswordInfo(e.target.value)} placeholder={"Password"} text="Password" type="Password" />
    </Container>
    <Login_new  onClick={() => {router.push({
        pathname: '../SignUpPage',
      })}}><u>New here? Sign Up</u></Login_new>
    <FormButtons onClick={LogInHandler} type="button" text={"Login"}></FormButtons>
 </LoginBox>
 
}
Login.defaultProps = {
  }

export default Login;