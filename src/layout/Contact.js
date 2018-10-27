import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

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


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {

    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ""
    });
  }

  render() {
    return (
      <Wrapper>
        <Img src="../../content/img/Clippy.png" />
        <Box>
          <WrapperForm>
            <form onSubmit={this.props.addItem}>
              <input
                onChange={e => this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                type="text"
                placeholder="Message"
              />
              <button
                onClick={() => this.addToList(this.state.userInput)}
                type="submit">
                <strong>Send</strong>
              </button>
            </form>
          </WrapperForm>

          {this.state.list.map((val) =>
            <Ask key={val.toString()} description={val} top={val.top} />
          )}
        </Box>
      </Wrapper>
    );
  }
}



export default Contact