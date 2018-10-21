import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
// import GlobalStyle from './style/GlobalStyle'



//---------- Import components 
import HomePage from './layout/HomePage';
import Referents from './layout/Referents';



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
    html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,figure,footer,header,hgroup,menu,nav,section,time,mark,audio,video
  {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    vertical-align:baseline;
    background:transparent;
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
