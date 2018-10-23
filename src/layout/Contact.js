import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Ask from "../components/Ask"
import Response from "../components/Response"

const Wrapper = styled.section`
  background-color: #373640;
  height: 100vh;
`;

const Box = styled.div `
  position: relative;
  background-color: #ffffff;
  width: 400px;
  height: 600px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -300px;
  border-radius: 6px;
  box-shadow: 1px 1px 15px 1px #000000;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: red;  
  width: 100%;
`;


class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <Ask description="Hi! How can I reach Germán?" top="5%"/>

          <Response description="You can call him at +34 619 00 43 64" top="16%" />
          <Response description="Or, email him at germanro94@gmail.com" top="24%" />

          <Ask description="Awesome. Thanks!" top="34%"/>
          <Ask description="Also, He have Github or Linkedln?" top="42%"/>

          <Response description="Yes, both!" top="50%" />
          <Response description="Here you have it: linkedln and github" top="58%" />

          <TextBox>
            
          </TextBox>
        </Box>
      </Wrapper>
    )
  }
}



export default Contact