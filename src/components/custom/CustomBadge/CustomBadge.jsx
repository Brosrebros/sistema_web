import React from 'react'
import { CustomBadgeStyled } from './CustomBadge.styles'

function CustomBadge({children, color}) {
  return (
    <CustomBadgeStyled color={color}>
      {children}
    </CustomBadgeStyled>
  )
}

export default CustomBadge
