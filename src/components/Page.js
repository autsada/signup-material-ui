import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import NavBar from './NavBar'
import { muiTheme } from '../cssTheme'

const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 10px;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-family: ${props => props.theme.typography.fontFamily}
   }
`

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const InnerPage = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
`
console.log(muiTheme)
const Page = ({ children }) => (
  <ThemeProvider theme={muiTheme}>
    <>
      <GlobalStyle />
      <StyledPage>
        <NavBar />
        <InnerPage>{children}</InnerPage>
      </StyledPage>
    </>
  </ThemeProvider>
)

export default Page
