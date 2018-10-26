import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Ask from "../components/Ask"
import Response from "../components/Response"
import FormChat from "../components/FormChat"

const Wrapper = styled.section`
  background-color: #FFFFFF;
  height: 100vh;
`;

const Box = styled.div`
  position: relative;
  background-color: #15202B;
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
  
`;

const Img = styled.img`
  position: absolute;
  left: 50px;
  top: 50%;
  width: 400px;
  height: 400px;
`;


class Contact extends Component {
  addItem = e => {
    e.preventDefault();
  }
  render() {
    return (
    <Wrapper>
      <Img src="../../content/img/Clippy.png" />
      <Box>
        
        <FormChat
          addItem={this.addItem} />
      </Box>
    </Wrapper>
    )
  }
}



export default Contact