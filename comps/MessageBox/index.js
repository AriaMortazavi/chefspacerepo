import React from "react";
import styled, { css } from "styled-components";

const MessageCont = styled.div`
    width: 100%;
    display: flex;
    box-shadow: 1px 1px 5px #e0e5e9;
    align-items: center;
    overflow-x: hidden;
    justify-content: space-between;
    position: absolute;
    bottom: 0px;
`;

const SendButton = styled.img`
    height: 25px;
    padding: 20px;
    width: auto;
`;

const ImageUpload = styled.img`
    height: 20px;
    padding: 20px;
    width: auto;
`;

const UploaderInput = styled.input`
    display: none;
`;

const MessageField = styled.input`
    height: 25px;
    // margin-left: 15px;
    width: 75%;
    border: 0px;
`;

const MessageBox = ({ chefLvl }) => {
  return (
    <MessageCont>
        <label for="imageUploader">
            <ImageUpload src="/imageUpload.svg" />
        </label>
        <UploaderInput id="imageUploader" type="file" accept="image/*"/>
    
        <MessageField placeholder="Share your chef secrets..."/>

      <a href="">
        <SendButton src="/sendButton.svg" />
      </a>
    </MessageCont>
  );
};
MessageBox.defaultProps = {

};

export default MessageBox;
