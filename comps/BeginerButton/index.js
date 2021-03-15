import React, { useState } from 'react'
import styled, {css} from 'styled-components';

const ItemBox = styled.form`
    width: 10%;
    max-height: 100%;
    display: flex;
    align-items: center;
  justify-content: center;
    margin: 10px;
    padding: 0px;
    margin-bottom: 31px;
`;
const ImgButton1 = styled.input`
`;

const ImgButton2 = styled.input`
`;

const ImgButton3 = styled.input`
`;

const ImageV1 = styled.img`
    width: 50%;
`;
const ImageV2 = styled.img`
    width: 70%;
`;
const ImageV3 = styled.img`
    width: 100%;
`;

const UnderText1 = styled.label`
    color: #EF7E5B;
`;

const UnderText2 = styled.label`
    color: #EF7E5B;
`;

const UnderText3 = styled.label`
    color: #EF7E5B;
`;

const BeginerBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 10px;
   margin-right: 10px;
   cursor: pointer;
    background-color: white;
    border: none;
    text-align: center;
    align-items: center;
  justify-content: center;

   :hover{
        opacity: 100%;
    }

    
    :checked{
        opacity: 100%;
    }

    :focus {outline:0;}
`;

const IntermediateBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 10px;
   margin-right: 10px;
   cursor: pointer;
    background-color: white;
    border: none;
    text-align: center;
    align-items: center;
  justify-content: center;

   :hover{
        opacity: 100%;
    }

    
    :checked{
        opacity: 100%;
    }

    :focus {outline:0;}
`;

const ProffessionalBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 10px;
   margin-right: 10px;
   cursor: pointer;
    background-color: white;
    border: none;
    text-align: center;
    align-items: center;
  justify-content: center;

   :hover{
        opacity: 100%;
    }

    
    :checked{
        opacity: 100%;
    }

    :focus {outline:0;}
`;


const BeginerButton = ({onChange}) => {
    return  <ItemBox>
        <BeginerBox>
        <ImageV1 src="/beginerhat.svg"></ImageV1>
        <UnderText1 for="beginer">Beginner</UnderText1>
        <ImgButton1 value="beginer"  onChange={onChange} name="cooklvl" id="beginer"  type="radio"></ImgButton1>
        </BeginerBox>

        <IntermediateBox>
        <ImageV2 src="/Intermediatehat.svg"></ImageV2>
        <UnderText2 for="Intermediate">Intermediate</UnderText2>
        <ImgButton2 value="Intermediate" onChange={onChange} name="cooklvl" id="Intermediate"  type="radio"></ImgButton2>
        </IntermediateBox>

        <ProffessionalBox>
        <ImageV3 src="/ProffessionalHat.svg"></ImageV3>
        <UnderText3 for="Proffessional">Proffessional</UnderText3>
        <ImgButton3 value="Proffessional" onChange={onChange} name="cooklvl" id="Proffessional"  type="radio"></ImgButton3>
        </ProffessionalBox>
    </ItemBox>
 
}

BeginerButton.defaultprops = {
}

export default BeginerButton;