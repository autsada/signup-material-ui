import { createMuiTheme } from '@material-ui/core/styles'

import { myTheme } from './myTheme'

export const muiTheme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: '12px',
        color: myTheme.teal
      }
    },
    MuiOutlinedInput: {
      root: {
        fontSize: '16px',
        color: myTheme.black
      }
    },
    MuiButton: {
      root: {
        color: myTheme.white,
        background: myTheme.teal,
        fontSize: '1.6rem',
        border: `0.8px solid ${myTheme.white};`,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: `${myTheme.darkTeal}`
        }
      }
    }
  },
  ...myTheme,
  palette: { primary: { main: myTheme.teal } }
})
