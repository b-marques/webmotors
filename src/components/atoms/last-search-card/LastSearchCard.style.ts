import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.secondaryVariant1};
  border-radius: 5px;
  width: 100%;
`

export const Header = styled.div`
  width: 100%;
  min-height: 32px;
  border-radius: 4px 4px 0 0;
  background-color: ${props => props.theme.secondaryVariant1};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

export const Make = styled.div`
  color: ${props => props.theme.white};
  text-transform: uppercase;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
  width: 100%;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px;
  margin: 2px;
  border: 1px solid ${props => props.theme.secondaryVariant2};
  border-radius: 15px;
  width: 100%;
`

export const Label = styled.label`
  padding: 0 5px 0 0;
`

export const Value = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
