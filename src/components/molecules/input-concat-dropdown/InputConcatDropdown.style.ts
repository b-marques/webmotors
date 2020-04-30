import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  & > div:nth-child(1) {
    flex-grow: 3;
    border-radius: 3px 0 0 3px;
  }

  & > div:nth-child(2) {
    flex-grow: 1;
  }

  & > div:nth-child(2) > button {
    border-radius: 0 3px 3px 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 75% 25%;
  }
`
