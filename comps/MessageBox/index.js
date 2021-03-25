import axios from "axios";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const MessageCont = styled.form`
    width: 100%;
    display: flex;
    box-shadow: 1px 1px 5px #e0e5e9;
    align-items: center;
    overflow-x: hidden;
    justify-content: space-between;
    position: absolute;
    bottom: 0px;
`;

const SendButtonIcon = styled.img`
    height: 25px;
    padding: 20px;
    width: auto;
`;

const sendButton = styled.button`

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

const MessageBox = ({submit, file, onChangeUpload, onChangeDescription}) => {

  // const [file, setFile] = useState();
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState();

  // const submit = async event => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("image", file);
  //   formData.append("description", description);

  //   const result = await axios.post('/images', formData, { headers: {'Content-Type':'multipart/form-data'}})
  //   setImage(result.data.imagePath)
  // }

  return (
    <MessageCont onSubmit={submit}>
        <label for="imageUploader">
            <ImageUpload src="/imageUpload.svg" />
        </label>

        <UploaderInput id="imageUploader" type="file" accept="image/*" filename={file} onChange={onChangeUpload}/>
    
        <MessageField placeholder="Share your chef secrets..." type="text" onChange={onChangeDescription}/>

      <sendButton type="submit"><SendButtonIcon src="/sendButton.svg" /></sendButton>
      
      {/* { imagePath && <img src={imagePath}>} */}

    </MessageCont>

  );
};
MessageBox.defaultProps = {
  submit:"",
  file:"",
  onChangeUpload:"",
  onChangeDescription:""
};

export default MessageBox;
