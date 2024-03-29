import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Divider, Button } from '@material-ui/core'
import styled from 'styled-components'
import OutSideClick from 'react-outside-click-handler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import emailValidation from '../libs/emailValidation'
import passwordValidation from '../libs/passwordValidation'
import validation from '../libs/validation'
import { useFormValidation, LoggingContext } from '../hooks'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: '100px'
  },
  cssOutlinedInput: {
    '&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline': {
      borderColor: `${theme.teal}`,
      borderWidth: '0.6px' //default
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
      borderWidth: '1px',
      borderColor: `${theme.darkTeal}` //hovered
    },
    '&$cssFocused $notchedOutline': {
      borderWidth: '1px',
      borderColor: `${theme.darkTeal}` //focused
    }
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {}
}))

const ModalDiv = styled.div`
  width: 40%;
  height: auto;
  background: ${props => props.theme.white};
  margin: 0 auto;
  margin-top: -2rem;
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.grey};
  border-radius: ${props => props.theme.shape.borderRadius * 2}px;
  padding: 0;
  position: relative;

  @media ${props => props.theme.lg} {
    width: 55%;
    margin-top: 6rem;
  }

  @media ${props => props.theme.md} {
    width: 60%;
  }

  @media ${props => props.theme.sm} {
    width: 80%;
    margin-top: 3rem;
  }

  .MuiInputLabel-outlined {
    font-size: 2rem;
  }

  .close {
    /* position: absolute;
    top: 0.5rem;
    right: 1rem; */
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .close-left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      margin-top: 0.5rem;
      margin-right: 1rem;
      font-size: 3rem;
      color: ${props => props.theme.grey};
      cursor: pointer;
      border-radius: 50px;
      transition: background-color ${props => props.theme.transitionDuration}
        ease-in;

      &:hover {
        color: ${props => props.theme.black};
        background: ${props => props.theme.lightgrey};
      }

      @media ${props => props.theme.sm} {
        font-size: 2rem;
        right: 0.5rem;
      }
    }
  }

  .header {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 5rem;

    @media ${props => props.theme.sm} {
      margin-bottom: 3rem;
      width: 80%;
    }

    .header-text {
      margin-top: 3rem;
      margin-bottom: 1rem;
      font-size: 3.3rem;
      font-weight: ${props => props.theme.typography.fontWeightMedium};

      @media ${props => props.theme.md} {
        font-size: 3rem;
      }

      @media ${props => props.theme.sm} {
        font-size: 2.2rem;
        margin-top: 1rem;
      }
    }
  }

  .social-media-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 5rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color ${props => props.theme.transitionDuration}
      ease-in;

    @media ${props => props.theme.sm} {
      height: 4rem;
      width: 80%;
    }

    .social-media {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 5fr;
      color: white;
      cursor: pointer;

      /* @media ${props => props.theme.md} {
        grid-template-columns: 2fr 5fr;
      }

      @media ${props => props.theme.sm} {
        grid-template-columns: 1fr 5fr;
      } */

      .social-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .social-word {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        border-radius: 0 4px 4px 0;

        @media ${props => props.theme.md} {
          font-size: 1.8rem;
        }

        @media ${props => props.theme.sm} {
          font-size: 1.4rem;
        }
      }
    }
  }

  .fb-container {
    background: ${props => props.theme.blue};

    &:hover {
      background: ${props => props.theme.darkBlue};
    }

    .fb-icon {
      border-right: 1.5px solid ${props => props.theme.darkBlue};
      font-size: 2.5rem;

      @media ${props => props.theme.md} {
        font-size: 2rem;
      }

      @media ${props => props.theme.sm} {
        font-size: 1.5rem;
      }
    }
  }

  .google-container {
    background: ${props => props.theme.red};

    &:hover {
      background: ${props => props.theme.darkRed};
    }

    .google-icon {
      border-right: 1.5px solid ${props => props.theme.darkRed};
      font-size: 2rem;

      @media ${props => props.theme.md} {
        font-size: 1.8rem;
      }

      @media ${props => props.theme.sm} {
        font-size: 1.3rem;
      }
    }
  }

  .divider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72%;
    height: 3rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1.5rem;

    .divider {
      width: 97%;
      margin: 0;
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;

      /* @media ${props => props.theme.md} {
        grid-template-columns: 2fr 1fr 2fr;
      }

      @media ${props => props.theme.sm} {
        grid-template-columns: 3fr 1fr 3fr;
      } */

      .or {
        text-align: center;
        margin-top: -10px;
        color: ${props => props.theme.grey};
      }

      .divider-item {
        text-align: center;
        border: 0.5px solid ${props => props.theme.lightgrey};
      }
    }
  }

  form {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 6rem;
    padding: 0;

    @media ${props => props.theme.sm} {
      margin-bottom: 3rem;
      width: 80%;
    }

    .MuiOutlinedInput-root {
      @media ${props => props.theme.sm} {
        height: 4rem;
        font-size: 1.4rem;
      }
    }

    .MuiOutlinedInput-root .border-error {
      border-color: ${props => props.theme.red};
    }

    .MuiInputLabel-outlined {
      @media ${props => props.theme.sm} {
        font-size: 1.8rem;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${props => props.theme.black} !important;
    }

    .space {
      height: 2rem;

      @media ${props => props.theme.sm} {
        height: 1rem;
        margin-bottom: 1rem;
      }

      .error-text {
        color: red;
        margin: 0 1rem;
        margin-top: 5px;
        font-size: 1.2rem;
      }
    }

    .submit-button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: 2rem;
      padding: 0;
      height: 6rem;
      border-radius: ${props => props.theme.shape.borderRadius * 2}px;
      background: ${props => props.theme.teal};

      @media ${props => props.theme.sm} {
        margin-top: 1rem;
        height: 4rem;
      }

      .submit-button {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 2rem;

        @media ${props => props.theme.md} {
          font-size: 2rem;
        }

        @media ${props => props.theme.sm} {
          font-size: 1.4rem;
        }
      }
    }

    .signin-helper {
      margin-left: 1rem;

      .forgot-password {
        font-size: 1.6rem;
        color: ${props => props.theme.grey};

        span {
          color: ${props => props.theme.orange};
          cursor: pointer;

          &:hover {
            color: ${props => props.theme.darkTeal};
          }
        }

        @media ${props => props.theme.md} {
          font-size: 1.4rem;
        }

        @media ${props => props.theme.sm} {
          font-size: 1.1rem;
        }
      }

      .goto-signup {
        font-size: 1.6rem;
        color: ${props => props.theme.grey};

        span {
          color: ${props => props.theme.orange};
          cursor: pointer;

          &:hover {
            color: ${props => props.theme.darkTeal};
          }
        }

        @media ${props => props.theme.md} {
          font-size: 1.4rem;
        }

        @media ${props => props.theme.sm} {
          font-size: 1.1rem;
        }
      }
    }
  }
`

const initialValues = {
  email: '',
  password: ''
}

const SigninModal = () => {
  const classes = useStyles()
  const { handleClose, gotoSignup } = useContext(LoggingContext)
  const registerValidation = validation([emailValidation, passwordValidation])

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    handleBlur
  } = useFormValidation(initialValues, registerValidation)

  return (
    <OutSideClick onOutsideClick={handleClose}>
      <ModalDiv>
        <div className='close'>
          <div className='close-left' onClick={handleClose}>
            &times;
          </div>
        </div>
        <div className='header'>
          <h2 className='header-text'>Sign in to Cloudicity</h2>
        </div>
        <div className='social-media-container fb-container'>
          <div className='social-media'>
            <div className='social-icon fb-icon'>
              <FontAwesomeIcon
                icon={['fab', 'facebook-f']}
                className='icon-svg'
              />
            </div>
            <div className='social-word fb-word'>Sign in with Facebook</div>
          </div>
        </div>
        <div className='social-media-container google-container'>
          <div className='social-media'>
            <div className='social-icon google-icon'>
              <FontAwesomeIcon icon={['fab', 'google']} className='icon-svg' />
            </div>
            <div className='social-word google-word'>Sign in with Google</div>
          </div>
        </div>

        <div className='divider-container'>
          <div className='divider'>
            <div>
              <Divider className='divider-item' />
            </div>
            <span className='or'>or</span>
            <div>
              <Divider className='divider-item' />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            id='email'
            label='Email'
            name='email'
            className='field email'
            placeholder='Your Email Address'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required={true}
            error={!!errors.email}
            fullWidth
            variant='outlined'
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused
              }
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
          <div className='space'>
            {errors.email && <p className='error-text'>{errors.email}</p>}
          </div>
          <TextField
            id='password'
            label='Password'
            name='password'
            className='field password'
            placeholder='Choose a save Password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type='password'
            required={true}
            fullWidth
            margin='normal'
            variant='outlined'
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused
              }
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
          <div className='submit-button-container'>
            <Button
              type='submit'
              className='submit-button'
              style={{
                cursor:
                  isSubmitting ||
                  !!errors.email ||
                  ((errors.password && errors.password.length > 0) ||
                    !values.confirmPassword ||
                    errors.confirmPassword)
                    ? 'not-allowed'
                    : 'pointer'
              }}
            >
              Submit
            </Button>
          </div>
          <div className='signin-helper'>
            <div className='forgot-password'>
              <p>
                Forgot your Password? <span>Click</span>
              </p>
            </div>
            <div className='goto-signup'>
              <p>
                Don't have an account? <span onClick={gotoSignup}>Sign up</span>
              </p>
            </div>
          </div>
        </form>
      </ModalDiv>
    </OutSideClick>
  )
}

export default SigninModal
