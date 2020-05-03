import React from 'react'

import { Dropdown } from 'src/components/atoms/dropdown'
import { LocationInput } from 'src/components/atoms/location-input'

import { Container } from './InputConcatDropdown.style'

type InputConcatDropdownProps = {
  input: React.ComponentProps<typeof LocationInput>
  dropdown: React.ComponentProps<typeof Dropdown>
}

export const InputConcatDropdown = (props: InputConcatDropdownProps) => {
  const { input, dropdown } = props
  return (
    <Container>
      <LocationInput {...input}></LocationInput>
      <Dropdown {...dropdown} />
    </Container>
  )
}
