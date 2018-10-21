import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
// import GlobalStyle from './style/GlobalStyle'



//---------- Import components 
import HomePage from './components/layout/HomePage';
import Referents from './components/layout/Referents';



//---------- Normalize CSS

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
    {/* <HomePage />  */}
    <Referents /> 
  </section>


, root);


serviceWorker.unregister();
