import React, { ReactNode } from 'react'

import {
  Navbar,
  Content,
  MainFilterBox,
  SellMyCarButton,
  LastSearches,
  VehicleCards,
} from './HomeTemplate.style'

type HomeTemplateProps = {
  navbar: ReactNode
  tabDisplayer: ReactNode
  sellMyCarButton: ReactNode
  lastSearches: ReactNode
  vehicleCards: ReactNode
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { navbar, tabDisplayer, sellMyCarButton, lastSearches, vehicleCards } = props
  return (
    <>
      <Navbar>{navbar}</Navbar>
      <Content>
        <MainFilterBox>
          {tabDisplayer}
          <SellMyCarButton>{sellMyCarButton}</SellMyCarButton>
        </MainFilterBox>
        <LastSearches>{lastSearches}</LastSearches>
        <VehicleCards>{vehicleCards}</VehicleCards>
      </Content>
    </>
  )
}
