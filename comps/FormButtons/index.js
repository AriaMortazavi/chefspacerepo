import React, { useState } from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CreateNewListing = styled.button`
  border: 2px solid;
  width: max-content;
  transition: 0.2s;
  border-color: ${(props) => (props.color ? props.color : "#EF7E5B")};
  border-radius: 5px;
  background: transparent;
  color: ${(props) => (props.color ? props.color : "#EF7E5B")};
  text-align: center;
  line-height: 10px;
  padding: ${(props) => (props.padding ? props.padding : "0px 15px")};
  :hover {
    background: #ef7e5b;
    transition: 0.2s;
    color: ${(props) => (props.color ? props.color : "white")};
  }
`;
const Innertext = styled.p`
  font-size: 16px;
  width: max-content;
`;

const FormButtons = ({ color, border, text, type, onClick }) => {
  return (
    <ButtonContainer>
      <CreateNewListing
        onClick={onClick}
        type={type}
        border={border}
        color={color}
      >
        <Innertext>{text}</Innertext>
      </CreateNewListing>
    </ButtonContainer>
  );
};

FormButtons.defaultprops = {
  onClick: () => {},
};

export default FormButtons;
