import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";


import { theme1, theme2 } from '../theme/Themes'
import ThemeSelect from '../theme/ThemeSelect'


const AppWrapper = styled.div`
  text-align: center;
`


const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;


  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``


class App extends Component {
  state = {
    theme: theme1
  }
  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }
  render() {
    return (
      <ThemeProvider>
        <AppWrapper>
          <AppHeader>
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            Bootstrapped with <code>create-react-app</code>.
          </AppIntro>
          <AppIntro>
            Components styled with <code>styled-components</code>{' '}
            <EmojiWrapper aria-label="nail polish"></EmojiWrapper>
          </AppIntro>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App