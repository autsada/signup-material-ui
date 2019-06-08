import React, { useContext } from 'react'

import { LoggingContext } from '../hooks'
import Backdrop from '../components/Backdrop'
import ModalContainer from './../components/ModalContainer'
import SigninModal from '../components/SigninModal'

const SigninPage = () => {
  const { signinOpen } = useContext(LoggingContext)

  return (
    <>
      {signinOpen && (
        <ModalContainer>
          <Backdrop />
          <SigninModal />
        </ModalContainer>
      )}
    </>
  )
}

export default SigninPage
