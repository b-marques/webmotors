import styled from 'styled-components'

import { Card } from 'src/components/atoms/card/Card.style'

export const Container = styled(Card)`
  display: grid;
  max-width: 933px;
  max-height: 312px;
  gap: 14px;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-template-columns: repeat(8, 1fr);
  padding: 27px 53px;
`
export const Checkboxes = styled.div`
  grid-column: 1 / span 8;
  grid-row: 1;
  display: flex;
`

export const Location = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2;
`

export const Make = styled.div`
  grid-column: 5 / span 2;
  grid-row: 2;
`

export const Model = styled.div`
  grid-column: 7 / span 2;
  grid-row: 2;
`

export const Year = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3;
`

export const Price = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3;
`

export const Version = styled.div`
  grid-column: 5 / span 4;
  grid-row: 3;
`

export const AdvancedSearch = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4;
  align-self: center;
  justify-self: left;
  text-justify: left;
  margin-top: 7px;

  & > button {
    padding: 1rem 0;
  }
`

export const ClearFilter = styled.div`
  grid-column: 5 / span 1;
  grid-row: 4;
  align-self: center;
  justify-self: left;
  text-justify: left;
  margin-top: 7px;

  & > button {
    padding: 1rem 0;
  }
`

export const MainButton = styled.div`
  grid-column: 6 / span 3;
  grid-row: 4;
  align-self: center;
  margin-top: 7px;
`
