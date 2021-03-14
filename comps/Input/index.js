import React, { useState } from 'react'
import styled, {css} from 'styled-components';

const FormBox = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
 
`;
const TitleTextBox = styled.h3`

`;
const InputBox = styled.input`
    border-radius: 8px;
    border: 1px solid #EF7E5B;
    padding: 10px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    color: #434343;
`;

const Input = ({type, text, placeholder, style, fontSize, onChange}) => {
    return  <FormBox>
    <TitleTextBox style={fontSize={fontSize}}>{text}</TitleTextBox>
    <InputBox onChange={onChange} placeholder={placeholder} type={type} style={style}></InputBox>
    </FormBox>
 
}

Input.defaultprops = {
    type: "text",
    text: "title",
    placeholder: "Text",
    onChange: () => {}
}

export default Input;