import React, { ReactNode } from 'react'

import { Navbar, Content, MainFilterBox, LastSearches } from './HomeTemplate.style'

type HomeTemplateProps = {
  navbar: ReactNode
  tabDisplayer: ReactNode
  lastSearches: ReactNode
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { navbar, tabDisplayer, lastSearches } = props
  return (
    <>
      <Navbar>{navbar}</Navbar>
      <Content>
        <MainFilterBox>{tabDisplayer}</MainFilterBox>
        <LastSearches>{lastSearches}</LastSearches>
      </Content>
    </>
  )
}
