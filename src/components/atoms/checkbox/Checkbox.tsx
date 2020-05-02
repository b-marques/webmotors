import React from 'react'
import { FaCheck } from 'react-icons/fa'

import { Container, Checkmark, CheckIcon, Label } from './Checkbox.style'

type CheckboxProps = {
  label: string
  isChecked: boolean
  setChecked: () => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, isChecked, setChecked } = props
  return (
    <Container onClick={setChecked}>
      <Checkmark>
        {isChecked && (
          <CheckIcon>
            <FaCheck />
          </CheckIcon>
        )}
      </Checkmark>
      <Label>{label}</Label>
    </Container>
  )
}
