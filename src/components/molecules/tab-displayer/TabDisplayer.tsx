import React, { ReactNode } from 'react'

import { Container, Tabs, Content } from './TabDisplayer.style'
import { Tab } from 'src/components/atoms/tab'

type TabDisplayerProps = {
  tabs: Array<React.ComponentProps<typeof Tab>>
  content: Array<ReactNode>
  activeTab: number
  setActiveTab: (index: number) => void
}

export const TabDisplayer = (props: TabDisplayerProps) => {
  const { tabs, content, activeTab, setActiveTab } = props
  return (
    <Container>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={`tab-${index}`}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
            {...tab}
          />
        ))}
      </Tabs>
      <Content>{content[activeTab]}</Content>
    </Container>
  )
}
