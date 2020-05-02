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
          <Checkbox
            key={index}
            label={checkbox.label}
            isChecked={checkbox.isChecked}
            setChecked={checkbox.setChecked}
          />
        ))}
      </Checkboxes>
      <Location>
        <InputConcatDropdown dropdown={location.dropdown} input={location.input} />
      </Location>
      <Make>
        <Dropdown
          label={make.label}
          activeItem={make.activeItem}
          handleSelectItem={make.handleSelectItem}
          items={make.items}
        />
      </Make>
      <Model>
        <Dropdown
          label={model.label}
          activeItem={model.activeItem}
          handleSelectItem={model.handleSelectItem}
          items={model.items}
        />
      </Model>
      <Year>
        <Dropdown
          label={year.label}
          activeItem={year.activeItem}
          handleSelectItem={year.handleSelectItem}
          items={year.items}
        />
      </Year>
      <Price>
        <Dropdown
          label={price.label}
          activeItem={price.activeItem}
          handleSelectItem={price.handleSelectItem}
          items={price.items}
        />
      </Price>
      <Version>
        <Dropdown
          label={version.label}
          activeItem={version.activeItem}
          handleSelectItem={version.handleSelectItem}
          items={version.items}
        />
      </Version>
      <AdvancedSearch>
        <Button
          onClick={advancedSearch.onClick}
          size={advancedSearch.size}
          variant={advancedSearch.variant}
          color={advancedSearch.color}
          label={advancedSearch.label}
        />
      </AdvancedSearch>
      <ClearFilter>
        <Button
          onClick={clearFilter.onClick}
          size={clearFilter.size}
          variant={clearFilter.variant}
          color={clearFilter.color}
          label={clearFilter.label}
        />
      </ClearFilter>
      <MainButton>
        <Button
          onClick={mainButton.onClick}
          size={mainButton.size}
          variant={mainButton.variant}
          color={mainButton.color}
          label={mainButton.label}
        />
      </MainButton>
    </Container>
  )
}
