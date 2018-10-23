import React from 'react'
import styled from "styled-components"

const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #25D366;

  & input {
    margin-left: 10px;
  }

  & button {
    appearance: none;
    cursor: pointer;
    box-shadow: none;
    margin-right: 10px;
    float: right;
  }
`;

const TodoList = (props) => {
  return (
    <Wrapper>
      <div>
        <form>
          <input placeholder="Message" />
          <button type="submit"> Send message </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default TodoList