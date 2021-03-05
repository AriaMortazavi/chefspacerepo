import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Input from '../Input';
import FormButtons from '../FormButtons';
import logoicon from './CSLogo.png';
import headerimg from './headerimg.png';
import footerimg from './footerimg.png';
import axios from 'axios';

const LoginBox = styled.div`
    max-width: 100%;
    max-height: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: center;
`;

const Logo_icon = styled.img`
    width: 200px;
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
const Headerimg = styled.img`
    width: 100%;
    height: 200px;
`;

const Footerimg = styled.img`
    width: 100%;
    height: 150px;
`;

const Login = ({onFormComplete, onCancel, bottom, display}) => {

    const [emailInfo, setEmailInfo] = useState(null)
    const [passwordInfo, setPasswordInfo] = useState(null)

    useEffect(() => {
    
    }, []);

    return  <LoginBox>
        <Headerimg src={headerimg}></Headerimg>
        <Logo_icon src={logoicon}></Logo_icon>
        <Container>
        <Login_title>Login</Login_title>
      <Input onChange={(e) => { setEmailInfo(e.target.value) }} placeholder={"Email"} text="Email" type="text" />
      <Input onChange={(e) => { setPasswordInfo(e.target.value) }} placeholder={"Password"} text="Password" type="Password" />
    </Container>
    <Login_new><u>New here? Sign Up</u></Login_new>
    <FormButtons onClick={() => {
          onFormComplete(emailInfo, passwordInfo);
        }} type="button" text={"Login"}></FormButtons>
    <Footerimg src={footerimg}></Footerimg>
 </LoginBox>
 
}
Login.defaultProps = {
    onFormComplete: () => { },
  }

export default Login;