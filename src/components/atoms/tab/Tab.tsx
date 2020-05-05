import React, { ReactNode } from 'react'

import { Container, Icon, Text, ActionText, SubjectText } from './Tab.style'

type TabProps = {
  icon: ReactNode
  actionText: string
  subjectText: string
  onClick?: () => void
  isActive?: boolean
}

export const Tab = (props: TabProps) => {
  const { icon, actionText, subjectText, onClick, isActive = false } = props
  return (
    <Container role="button" onClick={onClick} isActive={isActive}>
      <Icon>{icon}</Icon>
      <Text>
        <ActionText>{actionText}</ActionText>
        <SubjectText>{subjectText}</SubjectText>
      </Text>
    </Container>
  )
}
