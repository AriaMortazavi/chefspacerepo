import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from 'next/router';

const Contents = styled.div`
 display: flex;
  justify-content: center;
  text-align: center;
  `

const InnerCont = styled.button`
  border: 1px solid #EF7E5B;
  width: 150px;
  height: 50px;
  transition: 0.2s;
  border-color: ${(props) => (props.color ? props.color : "none")};
  border-radius: 10px;
  background: transparent;
  :hover {
    transition: 0.2s;
    border-color: ${(props) => (props.color ? props.color : "black")};
  }
`;

const H3 = styled.h3`
  color: #ef7e5b;
  display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  bottom: 6px;
`;
const Img = styled.img`
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
    <Contents>
      <InnerCont onClick={logoutHandler}>
        <H3>Logout&nbsp;<Img src="logout.svg" /></H3>
      </InnerCont>
      </Contents>
  );
};
Logout.defaultProps = {};

export default Logout;
