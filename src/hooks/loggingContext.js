import React, { useState, createContext } from 'react'

export const LoggingContext = createContext()

export const LoggingProvider = ({ children }) => {
  const [signupOpen, setSignupOpen] = useState(false)
  const [signinOpen, setSigninOpen] = useState(false)

  const handleSignup = () => setSignupOpen(true)
  const handleSignin = () => setSigninOpen(true)
  const handleClose = () => {
    if (signupOpen) return setSignupOpen(false)
    if (signinOpen) return setSigninOpen(false)
  }

  const gotoSignup = () => {
    setSignupOpen(true)
    setSigninOpen(false)
  }

  const gotoSignin = () => {
    setSignupOpen(false)
    setSigninOpen(true)
  }

  return (
    <LoggingContext.Provider
      value={{
        signupOpen,
        handleSignup,
        signinOpen,
        handleSignin,
        handleClose,
        gotoSignup,
        gotoSignin
      }}
    >
      {children}
    </LoggingContext.Provider>
  )
}
