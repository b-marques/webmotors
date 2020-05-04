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
  justify-content: center;

  @media (min-width: 992px) {
    margin-top: 128px;
  }
`
