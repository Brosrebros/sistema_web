import React from 'react'
import { SectionLayoutStyled } from './SectionLayout.styles'

function SectionLayout({children, title}) {
  return (
    <SectionLayoutStyled>
      <h3>{title}</h3>
      {children}
    </SectionLayoutStyled>
  )
}

export default SectionLayout
