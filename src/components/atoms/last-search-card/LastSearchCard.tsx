import React from 'react'

import { Search } from 'src/store/last-searches/types'

import { Container, Header, Item, Body, Make, Value, Label } from './LastSearchCard.style'

type LastSearchCardProps = {
  item: Search
}

export const LastSearchCard = (props: LastSearchCardProps) => {
  const { item } = props
  return (
    <Container role="option">
      <Header>
        <Make>{item.make.name}</Make>
      </Header>
      <Body>
        <Item>
          <Label>Modelo:</Label>
          <Value>{item.model.name}</Value>
        </Item>
        <Item>
          <Label>Versão:</Label>
          <Value>{item.version.name}</Value>
        </Item>
        <Item>
          <Label>Raio:</Label>
          <Value>{item.radius.name}</Value>
        </Item>
      </Body>
    </Container>
  )
}
