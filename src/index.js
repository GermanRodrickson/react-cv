import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
// import GlobalStyle from './style/GlobalStyle'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`

const root = document.getElementById('root')

ReactDOM.render(

  <section>
    <GlobalStyle />
    <HomePage /> 
  </section>


, root);


serviceWorker.unregister();
