import React from 'react'

import { Container, Text, Dot } from './Loader.style'

export const Loader = () => {
  return (
    <Container data-testid="loader">
      <Text>
        Carregando
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </Text>
    </Container>
  )
}
