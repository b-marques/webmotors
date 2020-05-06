import styled from 'styled-components'

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.white};
  z-index: 999;
`

export const Content = styled.div`
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    margin-top: 128px;
  }
`

export const MainFilterBox = styled.div`
  position: relative;
  max-width: 933px;
`

export const SellMyCarButton = styled.div`
  margin-top: 30px;
  padding: 5px;

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const LastSearches = styled.div`
  margin-top: 30px;
  max-width: 100vw;
  width: 100%;

  @media (min-width: 490px) {
    max-width: 490px;
  }

  @media (min-width: 768px) {
    max-width: 933px;
  }
`

export const VehicleCards = styled.div`
  padding: 30px;
  width: 100%;
`
