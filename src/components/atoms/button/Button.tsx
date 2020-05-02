import React, { ReactNode } from 'react'

import { Button as BaseButton } from './Button.style'

type ButtonVariant = 'raised' | 'outlined' | 'text'

type ButtonSize = 'big' | 'medium'

type ButtonType = 'button' | 'submit'

type ButtonProps = {
  size: ButtonSize
  variant: ButtonVariant
  type?: ButtonType
  onClick: () => void
  color?: string
  children?: ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    size,
    variant,
    onClick = () => {},
    color = '#000',
    children = '',
  } = props

  return (
    <BaseButton type={type} size={size} variant={variant} color={color} onClick={onClick}>
      {children}
    </BaseButton>
  )
}
