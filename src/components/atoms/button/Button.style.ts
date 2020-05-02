import styled from 'styled-components'

export const Button = styled.button<{ size: string; variant: string; color: string }>`
  width: 100%;
  border-radius: 3px;
  transition: all linear 150ms;
  outline: 0;

  font-size: ${props => {
    switch (props.size) {
      case 'big':
        return `1.2rem`
      default:
        return `1rem`
    }
  }};
  font-weight: ${props => {
    switch (props.size) {
      case 'big':
        return `600`
      default:
        return `400`
    }
  }};
  padding: ${props => {
    switch (props.size) {
      case 'big':
        return `1.33rem 2.66rem`
      default:
        return `1rem 2.75rem`
    }
  }};
  border: ${props => {
    switch (props.variant) {
      case 'outlined':
        return `2px solid ${props.color}`
      default:
        return `0 solid`
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'raised':
        return `${props.theme.white}`
      default:
        return props.color
    }
  }};
  background-color: ${props => {
    switch (props.variant) {
      case 'raised':
        return `${props.theme.primary}`
      default:
        return props.theme.white
    }
  }};
  text-transform: ${props => {
    switch (props.variant) {
      case 'raised':
        return `uppercase`
      default:
        return `none`
    }
  }};

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    ${props => (props.variant === 'text' ? `box-shadow: none;` : ``)};
  }

  &:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    ${props => (props.variant === 'text' ? `box-shadow: none;` : ``)};
  }
`
