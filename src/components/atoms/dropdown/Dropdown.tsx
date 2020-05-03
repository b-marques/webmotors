import React, { useState, useRef } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import { useOutsideClick } from 'src/utils/hooks/useOutsideClick'
import { Loader } from 'src/components/atoms/loader'

import { Container, Header, Title, Icon, List, Item } from './Dropdown.style'

type DropdownItem = {
  id: number
  name: string
}

type DropdownProps<T> = {
  label: string
  items: Array<T>
  activeItem: number
  defaultOption: { id: number; name: string }
  handleSelectItem: (id: number) => void
  disabled?: boolean
  isLoading?: boolean
}

export const Dropdown = (props: DropdownProps<DropdownItem>) => {
  const {
    label,
    items,
    activeItem,
    defaultOption,
    handleSelectItem,
    disabled = false,
    isLoading = false,
  } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLButtonElement>(null)
  useOutsideClick(containerRef, setIsExpanded)

  const onItemSelect = (id: number) => {
    handleSelectItem(id)
    setIsExpanded(false)
    if (headerRef.current) headerRef.current.focus()
  }

  return (
    <Container ref={containerRef}>
      <Header
        ref={headerRef}
        isExpanded={isExpanded}
        disabled={disabled}
        onClick={() => setIsExpanded(!isExpanded)}
        id={`dropdown-${label}`}
        data-testid={`dropdown-${label}`}
        aria-labelledby={`dropdown-${label}`}
        aria-haspopup="listbox"
        aria-expanded={isExpanded}>
        {label ? `${label}:` : label}
        <Title isExpanded={isExpanded} hasLabel={label !== ''} activeItem={activeItem}>
          {[defaultOption, ...items].find(item => activeItem === item.id)!.name}
        </Title>
        <Icon isExpanded={isExpanded}>
          <FaCaretDown />
        </Icon>
      </Header>
      {isExpanded && (
        <List
          id={`dropdown-${label}-list`}
          tabIndex={-1}
          role="listbox"
          aria-labelledby={`dropdown-${label}`}>
          {[defaultOption, ...items].map(item => (
            <Item
              key={item.id}
              onClick={() => onItemSelect(item.id)}
              tabIndex={0}
              role="option"
              aria-selected={activeItem === item.id}>
              {item.name}
            </Item>
          ))}
          {isLoading && <Loader />}
        </List>
      )}
    </Container>
  )
}
