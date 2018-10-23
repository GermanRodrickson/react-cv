import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div``;

const Message = styled.div`
  position: absolute;
  background-color: #10171E;
  border-radius: 20px 20px 20px 0px;
  padding: 10px;
  margin-left: 15px;
  color: #FFFFFF;
  font-size: 14px;
`;


const Response = (props) => {

  let top = props.top
  let description = props.description;

  return (
    <Wrapper>
      <Message style={{ top: top }}>{description}</Message>
    </Wrapper>
  )
}

export default Response