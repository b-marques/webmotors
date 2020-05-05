import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  50% {
    color: transparent;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  color: ${props => props.theme.primary};
`
export const Text = styled.div`
  display: flex;
  align-items: center;
`

export const Dot = styled.div`
  animation: ${blink} 1s infinite;

  &:nth-child(2) {
    animation-delay: 250ms;
  }

  &:nth-child(3) {
    animation-delay: 500ms;
  }
`
