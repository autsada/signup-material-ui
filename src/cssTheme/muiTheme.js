import { createMuiTheme } from '@material-ui/core/styles'

import { myTheme } from './myTheme'

export const muiTheme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        padding: '0'
      }
    },
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
    MuiInput: {
      input: {
        background: 'white'
      },
      root: {
        '&$error': {
          border: '1px solid #FF5252'
        }
      }
    },
    MuiButton: {
      root: {
        color: myTheme.white,
        background: myTheme.teal,
        fontSize: '1.6rem',
        border: `0.8px solid ${myTheme.white};`,
        cursor: 'pointer',
        margin: '0',

        '&:hover': {
          backgroundColor: `${myTheme.darkTeal}`
        }
      }
    },
    MuiToolbar: {
      root: {
        '@media (max-width: 600px)': {
          height: '5rem'
        }
      }
    }
  },
  ...myTheme,
  palette: { primary: { main: myTheme.teal } }
})
