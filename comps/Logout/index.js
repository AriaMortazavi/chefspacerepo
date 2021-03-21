import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from 'next/router';

const Cont = styled.footer`
  display: flex;
  height: fit-content;
  justify-content: flex-end;
  box-shadow: 0px -1px 3px #e0e5e9;
  background-color: white;
  align-items: center;
  height: 70px;
  width: 100%;
`;

const InnerCont = styled.footer`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const H3 = styled.h3`
  margin-right: 10px;
  color: #ef7e5b;
  display: flex;
  align-items: center;
  margin-top: 0px;
`;
const Img = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const Logout = ({}) => {
  const router = useRouter()

  const logoutHandler = async () => {
    sessionStorage.clear();
  router.push({
    pathname: '../LoginPage',
  })
}

  return (
    <Cont>
      <InnerCont onClick={logoutHandler}>
        <H3>Logout</H3>
        <Img src="logout.svg" />
      </InnerCont>
    </Cont>
  );
};
Logout.defaultProps = {};

export default Logout;
