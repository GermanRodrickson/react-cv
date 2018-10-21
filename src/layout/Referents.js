import React, { Component } from "react";
import styled from "styled-components";
import Referent from "../components/Referent"


const Container = styled.div`
  position: absolute;

  background-color: ${props => props.theme.color};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  left: ${props => props.theme.left};
  bottom: ${props => props.theme.bottom};
  right: ${props => props.theme.right};
`;

const Wrapper = styled.section`
  position: relative;
  height: 80vh ;
`;

const ExplanationText = styled.section`
  text-align: center;
  background-color: paleturquoise;  
`;

const Title = styled.h2`
  font-size: 36px;

`;

const Paragraph = styled.p`
  width: 60%;
  font-size: 18px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 15px;
  float: right;
`;

const ContainerParagraph = styled.div`
  font-size: 18px;
  text-align: center;
`;


// -----------Themes

const ContainerOne = {
  left: "0",
  height: "100%",
  width: "40%",
  color: "#c7cec1"
};
const ContainerTwo = {
  left: "40%",
  height: "100%",
  width: "30%",
  color: "#d9d8d6"
};
const ContainerThree = {
  left: "0",
  bottom: "0",
  height: "50%",
  width: "30%",
  color: "#ded7c9"
};
const ContainerFour = {
  left: "30%",
  bottom: "0",
  height: "50%",
  width: "40%",
  color: "#ece7d2"
};
const ContainerFive = {
  right: "0",
  height: "100%",
  width: "30%",
  color: "#dabfb8"
};

class Referents extends Component {
  render() {
    return (
    <section>
      <ExplanationText>
        <Title>Referents</Title>
        <Paragraph>
          
        </Paragraph>
      </ExplanationText>

      <Wrapper>
        <Container theme={ContainerOne}>
          <Referent></Referent>
        </Container>

        <Container theme={ContainerTwo}>
          <Referent></Referent>
        </Container>

        <Container theme={ContainerThree}>
          <Referent></Referent>
        </Container>

        <Container theme={ContainerFour}>
          <Referent></Referent>
        </Container>

        <Container theme={ContainerFive}>
          <Referent></Referent>
        </Container>

      </Wrapper>
    </section>
    )
  }
}

export default Referents;