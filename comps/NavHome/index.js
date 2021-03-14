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

const NavHome = ({ chefLvl }) => {
  return (
    <Cont>
      <Img src="/homeFilled.svg" />
      <ImgHat src={chefLvl} />
      <a href="/Account">
        <Img src="/accountOutline.svg" />
      </a>
    </Cont>
  );
};
NavHome.defaultProps = {
  chefLvl: "/hat1.svg",
};

export default NavHome;
