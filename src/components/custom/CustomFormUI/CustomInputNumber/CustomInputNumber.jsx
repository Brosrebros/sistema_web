import React from 'react'
import { CustomInputNumberStyled } from './CustomInputNumber.styles'

function CustomInputNumber({children, placeholder}) {
  return (
    <CustomInputNumberStyled placeholder={placeholder}>
      {children}
    </CustomInputNumberStyled>
  )
}

export default CustomInputNumber
