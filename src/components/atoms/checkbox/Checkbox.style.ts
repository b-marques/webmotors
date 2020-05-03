import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.secondaryVariant1};
  cursor: pointer;
`

export const Checkmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${props => props.theme.secondaryVariant2};
  border-radius: 2px;
  margin: 0 9px 0 0;
`

export const CheckIcon = styled.div`
  display: flex;
  color: ${props => props.theme.primary};
  width: 63%;
  height: auto;

  & > svg {
    width: 100%;
  }
`

export const Label = styled.label`
  padding: 0 42px 0 0;
  font-size: 1rem;
`
