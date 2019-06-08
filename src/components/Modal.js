import React from 'react'
import { Modal } from '@material-ui/core'

import Signup from './Signup'

const ModalBackdrop = () => {
  return (
    <Modal>
      <Signup />
    </Modal>
  )
}

export default ModalBackdrop
