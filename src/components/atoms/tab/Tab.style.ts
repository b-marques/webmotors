import styled from 'styled-components'

export const Container = styled.div<{ isActive: boolean }>`
  width: 50%;
  height: 73px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 5px 20px 18px;
  border-bottom: ${props =>
    props.isActive
      ? `3px solid ${props.theme.primary}`
      : `1px solid ${props.theme.secondaryVariant3}`};
  color: ${props => (props.isActive ? props.theme.primary : props.theme.secondaryVariant2)};
  cursor: pointer;

  @media (min-width: 768px) {
    width: 176.5px;
  }
`

export const Icon = styled.div`
  display: flex;
  height: 20px;
  & > svg {
    width: 25px;
    height: 100%;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`

export const ActionText = styled.small`
  vertical-align: bottom;
  text-transform: uppercase;
  font-size: 0.917rem;
  color: ${props => props.theme.secondaryVariant2};
  padding: 5px 0;
`

export const SubjectText = styled.div`
  text-transform: uppercase;
  font-size: 1.833rem;
`
