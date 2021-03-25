import React from "react";
import styled, { css } from "styled-components";
import Logout from "../Logout"

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
  margin: 30px;
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
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px;
`;
const LabelUpload = styled.label`
  color: #434343;
`;

const ColorfulTitle = styled.h4`
  color: #EF7F5B;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px;
  display: flex;
`;

const LeaveButton = styled.div`
  margin-top: 200px;
`;


const AccountImg = ({ profileSrc, userName, userEmail, userlevel }) => {
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
      <H4><ColorfulTitle> Username: &nbsp;</ColorfulTitle>{userName}</H4> 
      <H4><ColorfulTitle>Email: &nbsp;</ColorfulTitle>{userEmail}</H4>
      <H4><ColorfulTitle>Level:&nbsp;</ColorfulTitle> {userlevel}</H4>
      <LeaveButton>
      <Logout/>
      </LeaveButton>
    </Cont>
  );
};
AccountImg.defaultProps = {
  profileSrc: "profile.png",
  userName: "User01",
  userEmail: "User01",
  userlevel: "User01",
};

export default AccountImg;
