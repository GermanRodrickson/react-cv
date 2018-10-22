import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div``;

const Message = styled.div`
  position: absolute;
  background-color: #FFFFFF;
  border-radius: 20px 20px 20px 0px;
  padding: 10px;
  margin-left: 15px;
  color: #000000;
  border: 1px solid #373640;
`;


const Response = (props) => {

  let top = props.top
  let description = props.description;

  return (
  <Wrapper>
    <Message style={{top: top}}>{description}</Message>
  </Wrapper>
  )
}

export default Response 