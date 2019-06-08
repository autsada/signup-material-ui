import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Page from './components/Page'
import { muiTheme } from './cssTheme'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import ContextProvider from './hooks/state'
import './fontawesome/fontawesome'

const App = () => (
  <ContextProvider>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <Page>
          <SignupPage />
          <SigninPage />
        </Page>
      </MuiThemeProvider>
    </StylesProvider>
  </ContextProvider>
)

export default App
