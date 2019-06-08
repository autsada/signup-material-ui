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
  background: ${props => props.theme.teal};
  height: 8rem;

  .MuiToolbar-regular {
    height: 100%;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sign-up-in {
        margin: 0;
      }
    }
  }

  button {
    margin: 0 1rem;
  }

  .menu-icon {
    display: none;

    .MuiSvgIcon-root {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media ${props => props.theme.sm} {
    height: 6rem;

    button {
      margin: 0 0.3rem;
      font-size: 1.1rem;
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
