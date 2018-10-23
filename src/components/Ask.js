import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section``;

const Message = styled.div`
  position: absolute;
  right: 0;
  background-color: #1DA1F2;
  border-radius: 20px 20px 0 20px;
  color: #FFFFFF;
  padding: 10px;
  margin-right: 15px;
  font-size: 14px;
`;


const Ask = (props) => {

  let top = props.top
  let description = props.description;

  return (
    <Wrapper>
      <Message style={{ top: top }}>{description}</Message>
    </Wrapper>
  )
}

export default Ask 