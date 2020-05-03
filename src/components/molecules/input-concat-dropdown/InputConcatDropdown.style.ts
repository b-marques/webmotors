import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  & > div:nth-child(1) {
    border-radius: 3px 0 0 3px;
  }

  & > div:nth-child(2) {
  }

  & > div:nth-child(2) > button {
    border-radius: 0 3px 3px 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 73% 27%;
  }
`
