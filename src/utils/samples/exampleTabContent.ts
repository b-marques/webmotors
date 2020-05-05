import styled from 'styled-components'

export const Example = styled.div`
  width: 100vw;
  height: 382px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  max-width: 933px;

  @media (min-width: 490px) {
    width: 490px;
  }

  @media (min-width: 768px) {
    height: 239px;
    width: 100vw;
  }
`
