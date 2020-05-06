import styled from 'styled-components'

import { Card } from '../card/Card.style'

export const Container = styled(Card)`
  width: 100%;
  height: 370px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Image = styled.div<{ image: string }>`
  height: 186px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const MakeModel = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  font-weight: 600;
  padding: 10px;
  font-size: 1.167rem;
`

export const Version = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.secondaryVariant1};
  padding: 0 10px;
  font-size: 1.167rem;
  line-height: 1.3rem;
  flex-grow: 1;
`

export const Price = styled.div`
  color: ${props => props.theme.secondaryVariant1};
  font-size: 1.833rem;
  padding: 10px;
`

export const YearKm = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  color: ${props => props.theme.secondaryVariant2};
`

export const Year = styled.div``

export const Km = styled.div``
