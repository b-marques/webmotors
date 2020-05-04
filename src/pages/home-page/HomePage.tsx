import React, { useState } from 'react'
import { FaCarSide, FaMotorcycle } from 'react-icons/fa'

import { processMakes, processModels, processVersions } from 'src/utils/functions/processData'
import { useFetchData } from 'src/utils/hooks/useFetchData'
import { TabDisplayer } from 'src/components/molecules/tab-displayer'
import { FilterBox } from 'src/components/organisms/filter-box'
import { HomeTemplate } from 'src/components/templates/home-template'
import { Navbar } from 'src/components/atoms/navbar'
import { Card } from 'src/components/atoms/card'
import { Example } from 'src/utils/samples/exampleTabContent'

const API_URL = process.env.REACT_APP_API_URL || ''

export const HomePage = () => {
  const radiusItems = [
    { id: 1, name: '50km' },
    { id: 2, name: '100km' },
    { id: 3, name: '150km' },
    { id: 4, name: '200km' },
    { id: 5, name: '400km' },
    { id: 6, name: '1000km' },
  ]

  const yearItems = [
    { id: 1, name: '1995' },
    { id: 2, name: '2000' },
    { id: 3, name: '2005' },
    { id: 4, name: '2012' },
    { id: 5, name: '2018' },
    { id: 6, name: '2020' },
  ]
  const priceItems = [
    { id: 1, name: '0,00 ~ 5.000,00' },
    { id: 2, name: '5.001,00 ~ 10.000,00' },
    { id: 3, name: '10.001,00 ~ 20.000,00' },
    { id: 4, name: '20.001,00 ~ 40.000,00' },
    { id: 5, name: '40.001,00 ~ 80.000,00' },
    { id: 6, name: 'acima de 80.000,00' },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [isNew, setIsNew] = useState(false)
  const [isUsed, setIsUsed] = useState(false)
  const [locationValue, setLocationValue] = useState('')
  const [radius, setRadius] = useState(0)
  const [make, setMake] = useState(0)
  const [model, setModel] = useState(0)
  const [year, setYear] = useState(0)
  const [price, setPrice] = useState(0)
  const [version, setVersion] = useState(0)

  const makeItems = useFetchData(`${API_URL}/Make`, {}, true, processMakes)
  const modelItems = useFetchData(`${API_URL}/Model`, { MakeID: make }, make !== 0, processModels)
  const versionItems = useFetchData(
    `${API_URL}/Version`,
    { ModelID: model },
    model !== 0,
    processVersions,
  )

  function handleSetMake(id: number) {
    if (make !== id) {
      setMake(id)
      setModel(0)
      setVersion(0)
    }
  }

  function handleSetModel(id: number) {
    if (model !== id) {
      setModel(id)
      setVersion(0)
    }
  }

  function handleAdvancedSearch() {
    console.log('open advanced search page')
  }

  function handleClearFilters() {
    setIsNew(false)
    setIsUsed(false)
    setLocationValue('')
    setRadius(0)
    setMake(0)
    setModel(0)
    setYear(0)
    setPrice(0)
    setVersion(0)
  }

  function handleShowOffers() {
    console.log('show offer with defined filters')
  }

  return (
    <HomeTemplate
      navbar={<Navbar />}
      tabDisplayer={
        <TabDisplayer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={[
            {
              icon: <FaCarSide />,
              actionText: 'comprar',
              subjectText: 'carros',
            },
            {
              icon: <FaMotorcycle />,
              actionText: 'comprar',
              subjectText: 'motos',
            },
          ]}
          content={[
            <FilterBox
              checkboxes={[
                { label: 'Novos', isChecked: isNew, setChecked: () => setIsNew(!isNew) },
                { label: 'Usados', isChecked: isUsed, setChecked: () => setIsUsed(!isUsed) },
              ]}
              location={{
                input: { value: locationValue, setValue: setLocationValue },
                dropdown: {
                  label: 'Raio',
                  items: radiusItems,
                  activeItem: radius,
                  defaultOption: { id: 0, name: 'Todos' },
                  handleSelectItem: setRadius,
                },
              }}
              make={{
                label: 'Marca',
                items: makeItems.status === 'loaded' ? makeItems.payload : [],
                activeItem: make,
                defaultOption: { id: 0, name: 'Todas' },
                handleSelectItem: handleSetMake,
                isLoading: makeItems.status === 'loading',
              }}
              model={{
                label: 'Modelo',
                items: modelItems.status === 'loaded' ? modelItems.payload : [],
                activeItem: model,
                defaultOption: { id: 0, name: 'Todos' },
                handleSelectItem: handleSetModel,
                disabled: make === 0,
                isLoading: modelItems.status === 'loading',
              }}
              year={{
                label: '',
                items: yearItems,
                activeItem: year,
                defaultOption: { id: 0, name: 'Ano Desejado' },
                handleSelectItem: setYear,
              }}
              price={{
                label: '',
                items: priceItems,
                activeItem: price,
                defaultOption: { id: 0, name: 'Faixa de Preço' },
                handleSelectItem: setPrice,
              }}
              version={{
                label: 'Versão',
                items: versionItems.status === 'loaded' ? versionItems.payload : [],
                activeItem: version,
                defaultOption: { id: 0, name: 'Todas' },
                handleSelectItem: setVersion,
                disabled: model === 0,
                isLoading: versionItems.status === 'loading',
              }}
              advancedSearch={{
                size: 'medium',
                variant: 'text',
                color: 'primary',
                onClick: handleAdvancedSearch,
                label: '> Busca Avançada',
              }}
              clearFilter={{
                size: 'medium',
                variant: 'text',
                color: 'secondaryVariant2',
                onClick: handleClearFilters,
                label: 'Limpar filtros',
              }}
              mainButton={{
                size: 'big',
                variant: 'raised',
                color: 'primary',
                onClick: handleShowOffers,
                label: 'Ver Ofertas',
              }}
            />,
            /* Empty component example. Can be changed to a motorcicle FilterBox */
            <Card>
              <Example>Exemplo</Example>
            </Card>,
          ]}
        />
      }
    />
  )
}
