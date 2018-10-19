import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`

export const theme = {
  primary: "#6e27c5"
}