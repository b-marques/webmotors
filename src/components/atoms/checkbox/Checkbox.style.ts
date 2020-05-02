import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.secondaryVariant2};
`

export const Checkmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  border: 1px solid ${props => props.theme.secondaryVariant2};
  border-radius: 2px;
  margin: 0 0.8rem 0 0;
`

export const CheckIcon = styled.div`
  display: flex;
  color: ${props => props.theme.primary};
  width: 73%;
  height: 73%;

  & > svg {
    height: 100%;
  }
`

export const Label = styled.label`
  padding: 0 3.5rem 0 0;
`
