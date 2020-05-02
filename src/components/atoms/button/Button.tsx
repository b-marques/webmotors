import React from 'react'

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
  label?: string
}

export const Button = (props: ButtonProps) => {
  const { type = 'button', size, variant, label, onClick, color = '#000' } = props

  return (
    <BaseButton type={type} size={size} variant={variant} color={color} onClick={onClick}>
      {label}
    </BaseButton>
  )
}
