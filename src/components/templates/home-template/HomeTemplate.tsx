import React, { ReactNode } from 'react'

import { Navbar, Content } from './HomeTemplate.style'

type HomeTemplateProps = {
  tabDisplayer: ReactNode
  navbar: ReactNode
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { tabDisplayer, navbar } = props
  return (
    <>
      <Navbar>{navbar}</Navbar>
      <Content>{tabDisplayer}</Content>
    </>
  )
}
