import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Header = styled.button<{ isExpanded: boolean; disabled: boolean }>`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.white};
  align-items: center;
  padding: 7px 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.secondaryVariant2};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  outline: 0;

  ${props =>
    props.isExpanded
      ? `
      border: solid 1px ${props.theme.secondaryVariant1};
      border-radius: 3px 3px 0 0;
      `
      : `
      border: solid 1px ${props.theme.secondaryVariant2};
      border-radius: 3px;
      `};

  &:focus {
    border: solid 1px ${props => props.theme.secondaryVariant1};
  }

  &:disabled {
    border: solid 1px ${props => props.theme.secondaryVariant3};
    opacity: 0.6;
  }

  &:disabled * {
    color: ${props => props.theme.secondaryVariant2};
  }
`

export const Title = styled.span<{ isExpanded: boolean; hasLabel: boolean; activeItem: number }>`
  font-size: 1rem;
  font-weight: 600;
  padding: 0 3px;
  color: ${props =>
    props.hasLabel || props.activeItem !== 0
      ? props.theme.secondaryVariant1
      : props.theme.secondaryVariant2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Icon = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 200ms linear;
  ${props => (props.isExpanded ? `transform: rotate(180deg)` : ``)};
  margin-left: auto;
  color: ${props => props.theme.secondaryVariant1};
`

export const List = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 185px;
  overflow-y: auto;
  list-style: none;
  border: solid 1px ${props => props.theme.secondaryVariant2};
  border-radius: 0 0 3px 3px;
  border-top: none;
  z-index: 1;
  background-color: ${props => props.theme.white};
`

export const Item = styled.li`
  padding: 3.5px 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  outline: 0;

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
  }
`
