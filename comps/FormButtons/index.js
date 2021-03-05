import React, { useState } from 'react'
import styled, {css} from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 40px;
`

const CreateNewListing = styled.button`
  border: 2px solid;
  border-color: ${props=>props.color ? props.color : "#EF7E5B"};
  border-radius: 5px;
  width: 15%;
  background: transparent;
  color: ${props=>props.color ? props.color : "#EF7E5B"};
  text-align: center;
`;
const Innertext = styled.p`
  font-size: 16px;
`;

const FormButtons = ({color, border, text, type, onClick}) => {
    return  <ButtonContainer>
            <CreateNewListing onClick={onClick} type={type} border={border} color={color}>
              <Innertext>{text}</Innertext>
              </CreateNewListing>
     </ButtonContainer>
 
}

FormButtons.defaultprops = {
  onClick: () => {}
}

export default FormButtons;