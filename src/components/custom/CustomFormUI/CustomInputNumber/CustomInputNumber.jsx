import React from 'react'
import { CustomInputNumberStyled } from './CustomInputNumber.styles'

function CustomInputNumber({children}) {
  return (
    <CustomInputNumberStyled>
      {children}
    </CustomInputNumberStyled>
  )
}

export default CustomInputNumber
