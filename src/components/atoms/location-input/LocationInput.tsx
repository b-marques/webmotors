import React, { useState, useRef } from 'react'
import { FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa'

import { Container, LocationIcon, Prefix, Input, ClearInputIcon } from './LocationInput.style'

type LocationInputProps = {
  value: string
  setValue: (newInput: string) => void
}

export const LocationInput = (props: LocationInputProps) => {
  const { value, setValue } = props
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const setFocusToInput = () => {
    if (inputRef.current) {
      if (document.activeElement !== inputRef.current) inputRef.current.focus()
    }
  }

  return (
    <Container isFocused={isFocused} onClick={setFocusToInput}>
      <LocationIcon data-testid="location-icon">
        <FaMapMarkerAlt />
      </LocationIcon>
      <Prefix data-testid="location-prefix">Onde:</Prefix>
      <Input
        data-testid="location-input"
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Cidade - UF..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ClearInputIcon data-testid="clear-input-icon" onClick={() => setValue('')}>
        <FaTimesCircle />
      </ClearInputIcon>
    </Container>
  )
}
