import React from 'react';
import styled, {css} from 'styled-components';

const TemplateBox = styled.div`
`;

const Template = ({}) => {
    return  <TemplateBox>
        Hello
        <Hats/>
 </TemplateBox>
 
}
Template.defaultProps = {

}

export default Template;