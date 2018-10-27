import React, { Component } from "react"
import styled from "styled-components"

import Ask from "../components/Ask";

const Wrapper = styled.section`
  border-top: .1px solid #C8C8C8;
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
    background-color: #10171E;
    

      &:focus::placeholder {
      transform: translateX(20px);
      opacity: 0;
      transition: all .5s ease;
    }
  }

  & input::placeholder {
    color: #C8C8C8;
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
    background-color: #1DA1F2;
    border: none;
    transition: .3s;
    font-size: 14px;
    width: 80px;
  }

  & button:hover {
    color: #1DA1F2;
    background-color: #FFFFFF;
  }

  & input:focus {
    outline: none;
  }

  input,
  textarea,
  [contenteditable] {
    color: #FFFFFF;
    padding-left: 10px;

  }
`;

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    userInput: '',
    list: []
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


class FormChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;

    listArray.push(input)

    this.setState({
      list: listArray,
      userInput: ''
    });
  }

  render() {
    return (
      <Wrapper>
        <MyProvider>
          <form onSubmit={this.props.addItem}>
            <input
              onChange={(e) => this.changeUserInput(e.target.value)}
              value={this.state.userInput}
              type="text"
              placeholder="Message" />
            <button
              onClick={() => this.addToList(this.state.userInput)}
              type="submit">
              <strong>Send</strong>
            </button>
          </form>


          {this.state.list.map((val) =>
            <Ask key={val.toString()} description={val} top="" />
          )}


        </MyProvider>
      </Wrapper>
    )
  }
}

export default FormChat