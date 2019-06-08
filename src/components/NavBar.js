import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

//import Button from './styles/ButtonStyle'
import { LoggingContext } from './../hooks'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const NavBarStyle = styled(AppBar)`
  display: block;
  text-align: center;
  background: ${props => props.theme.teal};
  height: 8rem;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo {
      margin: 0;
      padding: 0;

      h2 {
        margin: 0;
        padding: 0;
      }
    }

    .menu-right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sign-up-in {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  button {
    margin: 0 1rem;
    border: 0.4px solid;
  }

  .menu-icon {
    display: none;
    margin-left: 1rem;
    border: none;

    .MuiSvgIcon-root {
      width: 3rem;
      height: 3rem;
      margin: 0;
    }
  }

  @media ${props => props.theme.sm} {
    height: 5rem;

    .MuiToolbar-regular {
      min-height: 0;
    }

    button {
      margin: 0 0.3rem;
      font-size: 1rem;
    }

    .menu-icon {
      display: block;
    }
  }
`

const NavBar = () => {
  const classes = useStyles()
  const { handleSignin, handleSignup } = useContext(LoggingContext)
  return (
    <div className={classes.root}>
      <NavBarStyle position='static'>
        <Toolbar className='nav-bar'>
          <div className='logo'>
            <h2>LOGO</h2>
          </div>
          <div className='menu-right'>
            <div className='sign-up-in'>
              <Button onClick={handleSignup}>Sign Up</Button>
              <Button onClick={handleSignin}>Sign In</Button>
            </div>
            <div className='hamburger-icon'>
              <IconButton
                edge='start'
                className='menu-icon'
                color='inherit'
                aria-label='Menu'
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </NavBarStyle>
    </div>
  )
}

export default NavBar
