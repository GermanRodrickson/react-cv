import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section `
  padding: 10px;
  display

`;

const Img = styled.p`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 15px;
  float: right;
`;


const Referent = (props) => {

  let name = props.name ? props.name : 'no name';
  let description = props.description ? props.description : 'no description';
  let photo = props.photo ? props.photo :'no photo';

  return (
  <Wrapper>
    <h2>{name}</h2> 
    <p>{description}</p> 
    <Img src={photo} />
  </Wrapper>
  )
}

export default Referent 