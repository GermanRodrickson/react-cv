import React, { Component } from "react";
import styled from "styled-components";


const ContainerOne = styled.div`
  background-color: #c7cec1;
  height: 100%;
  width: 40%;
  display: inline-block;
  position: absolute;
  left: 0;
`;
const ContainerTwo = styled.div`
  background-color: #d9d8d6;
  height: 100%;
  width: 30%;
  display: inline-block;
  position: absolute;
  left: 40%;
`;
const ContainerThree = styled.div`
  background-color: #ded7c9;
  height: 50%;
  width: 30%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
`;
const ContainerFour = styled.div`
  background-color: #ece7d2;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 30%;
  width: 40%;
  display: inline-block;
`;
const ContainerFive = styled.div`
  background-color: #dabfb8;
  width: 30%;
  height: 100%;
  display: inline-block;
  position: absolute;
  right: 0;
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

  font-size: ${props => props.theme.main};
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

const ContainerParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;



// -----------Themes

const TitleContainer = {
  main: "25px"
};

class Referents extends Component {
  render() {
    return <section>
        <ExplanationText>
          <Title>Referents</Title>
          <Paragraph>
            
          </Paragraph>
        </ExplanationText>
        <Wrapper>
          <ContainerOne>
            <Title theme={TitleContainer}>Title 1</Title>
            
            <ContainerParagraph>
              
            </ContainerParagraph>
          </ContainerOne>
          <ContainerTwo>
            <Title theme={TitleContainer}>Title 2</Title>
            
            <ContainerParagraph>
            </ContainerParagraph>
          </ContainerTwo>
          <ContainerThree>
            <Title theme={TitleContainer}>Title 3</Title>
            
            <ContainerParagraph>
            </ContainerParagraph>
          </ContainerThree>
          <ContainerFour>
            <Title theme={TitleContainer}>Title 4</Title>
            
            <ContainerParagraph>
            </ContainerParagraph>
          </ContainerFour>
          <ContainerFive>
            <Title theme={TitleContainer}>Title 5</Title>
            
            <ContainerParagraph>
            </ContainerParagraph>
          </ContainerFive>
        </Wrapper>
      </section>;
  }
}

export default Referents;