import React from "react";
import styled, { css } from "styled-components";

const Cont = styled.div`
  width: 100%;
  display: flex;
  //border-bottom: #E0E5E9 solid 1px;
  box-shadow: 1px 1px 5px #e0e5e9;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 25px;
  padding: 20px;
  width: auto;
`;

const ImgHat = styled.img`
  height: 35px;
  padding: 20px;
  width: auto;
`;

const NavAccount = ({ chefLvl }) => {
  return (
    <Cont>
      <a href="/Home">
        <Img src="/homeOutline.svg" />
      </a>
      <ImgHat src={chefLvl} />
      <Img src="/accountFilled.svg" />
    </Cont>
  );
};
NavAccount.defaultProps = {
  chefLvl: "/hat1.svg",
};

export default NavAccount;
