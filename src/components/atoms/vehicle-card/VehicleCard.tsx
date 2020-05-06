import React from 'react'

import { Container, Image, MakeModel, Version, Price, YearKm, Year, Km } from './VehicleCard.style'

type VehicleCardProps = {
  id: number
  make: string
  model: string
  version: string
  image: string
  km: number
  price: string
  yearModel: number
  yearFab: number
  onClick: (id: number) => void
}

export const VehicleCard = (props: VehicleCardProps) => {
  const { id, make, model, version, image, km, price, yearModel, yearFab, onClick } = props
  return (
    <Container onClick={() => onClick(id)}>
      <Image image={image}></Image>
      <MakeModel>{`${make} ${model}`}</MakeModel>
      <Version>{version}</Version>
      <Price>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(parseFloat(price))}
      </Price>
      <YearKm>
        <Year>{`${yearFab}/${yearModel}`}</Year>
        <Km>{`${km} km`}</Km>
      </YearKm>
    </Container>
  )
}
