import React, { useContext } from 'react'

import { LoggingContext } from '../hooks'
import Backdrop from '../components/Backdrop'
import SignupModal from '../components/SignupModal'
import ModalContainer from './../components/ModalContainer'

const SignupPage = () => {
  const { signupOpen } = useContext(LoggingContext)

  return (
    <>
      {signupOpen && (
        <ModalContainer>
          <Backdrop />
          <SignupModal />
        </ModalContainer>
      )}
    </>
  )
}

export default SignupPage
