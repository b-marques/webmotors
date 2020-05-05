import React, { ReactNode } from 'react'

import { Card as BaseCard } from './Card.style'

type CardProps = {
  children?: ReactNode
}

export const Card = (props: CardProps) => <BaseCard data-testid="card">{props.children}</BaseCard>
