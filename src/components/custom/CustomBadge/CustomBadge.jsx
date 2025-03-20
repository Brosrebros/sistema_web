import React from 'react'
import { CustomBadgeStyled } from './CustomBadge.styles'

function CustomBadge({children, color, id}) {
  return (
    <CustomBadgeStyled color={color} id={id}>
      {children}
    </CustomBadgeStyled>
  )
}

export default CustomBadge
