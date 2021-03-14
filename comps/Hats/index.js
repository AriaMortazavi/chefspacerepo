import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;
const InnerCont = styled.div`
  display: flex;
  justify-content: space-between;
`;


const SkillCont = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;
  opacity: ${(props) => (props.selected ? "100%" : "50%")};
  transform: ${(props) => (props.selected ? "scale(1.2)" : "scale(1)")};
  transition: .2s;
  :hover{
    opacity: 100%;
    transform: scale(1.2);
    transition: .2s;
  }

`;

const Text = styled.h5`
  margin-top: 10px;

  
`;

const H2 = styled.h3`
margin-bottom: 20px;
`;


const HatsCont = styled.img`
  width: auto;
  height: 25px;
`;

const Hats = ({text}) => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  return (
    <Cont>
      <H2>{text}</H2>
      <InnerCont>
        <SkillCont
        selected={selected}
          onClick={() => {
            setSelected(!selected);
            setSelected2(false);
            setSelected3(false);
          }}
        >
          <HatsCont src="hat1.svg" />
          <Text>Beginner</Text>
        </SkillCont>
        <SkillCont
           selected={selected2}
          onClick={() => {
            setSelected(false);
            setSelected2(!selected2);
            setSelected3(false);
          }}
        >
          <HatsCont src="hat2.svg" />
          <Text>Intermediate</Text>
        </SkillCont>
        <SkillCont
           selected={selected3}
          onClick={() => {
            setSelected(false);
            setSelected2(false);
            setSelected3(!selected3);
          }}
        >
          <HatsCont src="hat3.svg" />
          <Text>Professional</Text>
        </SkillCont>
      </InnerCont>
    </Cont>
  );
};
Hats.defaultProps = {
  text: "Choose Your Skill Level"
};

export default Hats;
