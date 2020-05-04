import styled from 'styled-components'

import { Card } from 'src/components/atoms/card/Card.style'

export const Container = styled(Card)`
  max-width: 933px;
  padding: 25px;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1.65rem;
  font-weight: 400;
  color: ${props => props.theme.secondaryVariant1};
  padding-bottom: 20px;
`

export const Items = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
