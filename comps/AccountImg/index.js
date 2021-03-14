import React from "react";
import styled, { css } from "styled-components";

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const UploadCont = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  right: -10px;
  flex-direction: column;
  > input {
    display: none;
  }
`;
const ImgCont = styled.div`
  height: 105px;
  width: 105px;
 
  position: relative;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 105px;
  width: 105px;
  border: 1px solid #EF7F5B;
  
`;
const ImgUpload = styled.img`
  border-radius: 50%;
  height: 25px;
  padding: 4px;
  background-color: white;
  cursor: pointer;
  width: 25px;
  border: 1px solid #EF7F5B;
`;
const H4 = styled.h4`
  color: #434343;
`;
const LabelUpload = styled.label`
  color: #434343;
`;

const AccountImg = ({ profileSrc, userName }) => {
  return (
    <Cont>
      <ImgCont>
        <Img src={profileSrc} />
        <UploadCont>
          <LabelUpload for="file-input">
            <ImgUpload src="/fileUpload.png" />
          </LabelUpload>
          <input id="file-input" type="file" />
        </UploadCont>
      </ImgCont>
      <H4>{userName}</H4>
    </Cont>
  );
};
AccountImg.defaultProps = {
  profileSrc: "profile.png",
  userName: "User01",
};

export default AccountImg;
