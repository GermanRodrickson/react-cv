import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Clippy from './Clippy.png'

import Ask from "../components/Ask"
import Response from "../components/Response"

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

const WrapperForm = styled.section`
  border-top: 0.1px solid #c8c8c8;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #263949;

  & input {
    margin-left: 10px;
    padding: 8px;
    margin: 10px 2px 10px 6px;
    display: inline-block;
    width: 70%;
    border-radius: 5px;
    border: none;
    background-color: #10171e;

    &:focus::placeholder {
      transform: translateX(20px);
      opacity: 0;
      transition: all 0.5s ease;
    }
  }

  & input::placeholder {
    color: #c8c8c8;
    font-size: 14px;
  }

  & button {
    appearance: none;
    cursor: pointer;
    box-shadow: none;
    margin-right: 10px;
    float: right;
    padding: 6px;
    margin: 10px 6px 10px 2px;
    border-radius: 30px;
    color: #ffffff;
    background-color: #1da1f2;
    border: none;
    transition: 0.3s;
    font-size: 14px;
    width: 80px;
  }

  & button:hover {
    color: #1da1f2;
    background-color: #ffffff;
  }

  & input:focus {
    outline: none;
  }

  input,
  textarea,
  [contenteditable] {
    color: #ffffff;
    padding-left: 10px;
  }
`;

const getMessage = event => event.target.value

class Contact extends Component {

  state = { message: '', historial: [] }

  onMessage = (event) => {
    const message = getMessage(event) 
    this.setState({ message });
  }

  append = (event) => {
    event.preventDefault();
    const historial = [...this.state, getMessage(event)]
    this.setState({
      historial,
      message: ''
    });
  };

  render() {
    return (
      <Wrapper>
        {/* <Img src={Clippy} /> */}
        <Box>
          <WrapperForm>
            <form onSubmit={this.append}>
              <input
                onChange={this.onMessage}
                value={this.state.message}
                type="text"
                placeholder="Message"
              />
              <button 
                type="submit">
                <strong>Send</strong>
              </button>
            </form>
          </WrapperForm>

          {this.state.historial.map(message => (
            <Ask key={message.toString()} description={message} top={message.top} />
          ))}
        </Box>
      </Wrapper>
    );
  }
}



export default Contact