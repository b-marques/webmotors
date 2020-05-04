import React, { ReactNode } from 'react'

import { Navbar, Content, MainFilterBox, SellMyCarButton, LastSearches } from './HomeTemplate.style'

type HomeTemplateProps = {
  navbar: ReactNode
  tabDisplayer: ReactNode
  sellMyCarButton: ReactNode
  lastSearches: ReactNode
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { navbar, tabDisplayer, sellMyCarButton, lastSearches } = props
  return (
    <>
      <Navbar>{navbar}</Navbar>
      <Content>
        <MainFilterBox>
          {tabDisplayer}
          <SellMyCarButton>{sellMyCarButton}</SellMyCarButton>
        </MainFilterBox>
        <LastSearches>{lastSearches}</LastSearches>
      </Content>
    </>
  )
}
