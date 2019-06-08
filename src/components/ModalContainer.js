import React from 'react'
import styled from 'styled-components'

const ContainerStyle = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  .inner-container {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100%;
    padding: 5% 0;
  }
`

const ModalContainer = ({ children }) => {
  return (
    <ContainerStyle>
      <div className='inner-container'>{children}</div>
    </ContainerStyle>
  )
}

export default ModalContainer
