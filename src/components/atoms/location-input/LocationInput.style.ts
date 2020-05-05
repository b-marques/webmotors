import styled from 'styled-components'

export const Container = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid ${props => props.theme.secondaryVariant2};

  ${props =>
    props.isFocused
      ? `border: 1px solid ${props.theme.secondaryVariant1}`
      : `border: 1px solid ${props.theme.secondaryVariant2}`}
`

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: ${props => props.theme.primary};

  svg {
    height: 19px;
    width: auto;
  }
`
export const Text = styled.div`
  display: flex;
  align-items: baseline;
`

export const Prefix = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme.secondaryVariant2};
`

export const Input = styled.input`
  width: 100%;
  padding: 0 7px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: 0 solid;
  outline: 0;
  color: ${props => props.theme.secondaryVariant1};
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: ${props => props.theme.secondaryVariant2};
  }
`
export const ClearInputIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  color: ${props => props.theme.secondaryVariant2};
  margin-left: auto;

  &:hover {
    color: ${props => props.theme.primary};
  }
`
