import React from 'react'

import { LastSearchCard } from 'src/components/atoms/last-search-card'
import { Search } from 'src/store/last-searches/types'

import { Container, Title, Items } from './LastSearchesCards.style'

type LastSearchesCardsProps = {
  cards: Search[]
}

export const LastSearchesCards = (props: LastSearchesCardsProps) => {
  const { cards } = props
  return (
    <Container>
      <Title>Suas Últimas Buscas</Title>
      <Items>
        {cards.map((card, index) => (
          <LastSearchCard key={`card-${index}`} item={card} />
        ))}
      </Items>
    </Container>
  )
}
