import React from 'react'

import { Checkbox } from 'src/components/atoms/checkbox'
import { InputConcatDropdown } from 'src/components/molecules/input-concat-dropdown'
import { Dropdown } from 'src/components/atoms/dropdown'
import { Button } from 'src/components/atoms/button'

import {
  Container,
  Checkboxes,
  Location,
  Make,
  Model,
  Year,
  Price,
  Version,
  AdvancedSearch,
  ClearFilter,
  MainButton,
} from './FilterBox.style'

type FilterBoxProps = {
  checkboxes: Array<React.ComponentProps<typeof Checkbox>>
  location: React.ComponentProps<typeof InputConcatDropdown>
  make: React.ComponentProps<typeof Dropdown>
  model: React.ComponentProps<typeof Dropdown>
  year: React.ComponentProps<typeof Dropdown>
  price: React.ComponentProps<typeof Dropdown>
  version: React.ComponentProps<typeof Dropdown>
  advancedSearch: React.ComponentProps<typeof Button>
  clearFilter: React.ComponentProps<typeof Button>
  mainButton: React.ComponentProps<typeof Button>
}

export const FilterBox = (props: FilterBoxProps) => {
  const {
    checkboxes,
    location,
    make,
    model,
    year,
    price,
    version,
    advancedSearch,
    clearFilter,
    mainButton,
  } = props
  return (
    <Container>
      <Checkboxes>
        {checkboxes.map((checkbox, index) => (
          <Checkbox key={index} {...checkbox} />
        ))}
      </Checkboxes>
      <Location>
        <InputConcatDropdown dropdown={location.dropdown} input={location.input} />
      </Location>
      <Make>
        <Dropdown {...make} />
      </Make>
      <Model>
        <Dropdown {...model} />
      </Model>
      <Year>
        <Dropdown {...year} />
      </Year>
      <Price>
        <Dropdown {...price} />
      </Price>
      <Version>
        <Dropdown {...version} />
      </Version>
      <AdvancedSearch>
        <Button {...advancedSearch} />
      </AdvancedSearch>
      <ClearFilter>
        <Button {...clearFilter} />
      </ClearFilter>
      <MainButton>
        <Button {...mainButton} />
      </MainButton>
    </Container>
  )
}
