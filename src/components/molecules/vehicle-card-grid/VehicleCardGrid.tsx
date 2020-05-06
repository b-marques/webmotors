import React from 'react'

import { VehicleCard } from 'src/components/atoms/vehicle-card'
import { Loader } from 'src/components/atoms/loader'

import { Container } from './VehicleCardGrid.style'

type VehicleCardGridProps = {
  cards: React.ComponentProps<typeof VehicleCard>[]
  isLoading: boolean
}

export const VehicleCardGrid = (props: VehicleCardGridProps) => {
  const { cards, isLoading } = props
  return (
    <Container>
      {cards.map(card => (
        <li key={`vehicle-${card.id}`}>
          <VehicleCard
            {...card}
            onClick={() => {
              console.log(`card#${card.id} clicked`)
            }}
          />
        </li>
      ))}
      {isLoading && <Loader />}
    </Container>
  )
}
