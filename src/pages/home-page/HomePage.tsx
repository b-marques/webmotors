import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaCarSide, FaMotorcycle } from 'react-icons/fa'

import { processMakes, processModels, processVersions } from 'src/utils/functions/processData'
import { priceItems, radiusItems, yearItems } from 'src/utils/samples/items'
import { useFetchData } from 'src/utils/hooks/useFetchData'
import { addLastSearch } from 'src/store/last-searches/actions'
import { Make, Model, Version, Radius } from 'src/store/last-searches/types'
import { RootState } from 'src/store'
import { TabDisplayer } from 'src/components/molecules/tab-displayer'
import { FilterBox } from 'src/components/organisms/filter-box'
import { HomeTemplate } from 'src/components/templates/home-template'
import { Navbar } from 'src/components/atoms/navbar'
import { Card } from 'src/components/atoms/card'
import { Example } from 'src/utils/samples/exampleTabContent'
import { LastSearchesCards } from 'src/components/molecules/last-searches-cards'

const API_URL = process.env.REACT_APP_API_URL || ''

export const HomePage = () => {
  const dispatch = useDispatch()
  const lastSearches = useSelector((state: RootState) => state.lastSearches)

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

  const makeDefaultOption = { id: 0, name: 'Todas' }
  const modelDefaultOption = { id: 0, name: 'Todos' }
  const versionDefaultOption = { id: 0, name: 'Todas' }
  const priceDefaultOption = { id: 0, name: 'Faixa de Preço' }
  const yearDefaultOption = { id: 0, name: 'Ano Desejado' }
  const radiusDefaultOption = { id: 0, name: 'Todos' }

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
    dispatch(
      addLastSearch({
        isNew,
        isUsed,
        location: locationValue,
        make:
          makeItems.status === 'loaded'
            ? makeItems.payload.find((e: Make) => e.id === make) ?? makeDefaultOption
            : makeDefaultOption,
        model:
          modelItems.status === 'loaded'
            ? modelItems.payload.find((e: Model) => e.id === model) ?? modelDefaultOption
            : modelDefaultOption,
        price: { id: 0, name: '' },
        radius: radiusItems.find((e: Radius) => e.id === radius) ?? radiusDefaultOption,
        version:
          versionItems.status === 'loaded'
            ? versionItems.payload.find((e: Version) => e.id === version) ?? versionDefaultOption
            : versionDefaultOption,
        year: { id: 0, name: '' },
      }),
    )
  }

  return (
    <>
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
                key={0}
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
                    defaultOption: radiusDefaultOption,
                    handleSelectItem: setRadius,
                  },
                }}
                make={{
                  label: 'Marca',
                  items: makeItems.status === 'loaded' ? makeItems.payload : [],
                  activeItem: make,
                  defaultOption: makeDefaultOption,
                  handleSelectItem: handleSetMake,
                  isLoading: makeItems.status === 'loading',
                }}
                model={{
                  label: 'Modelo',
                  items: modelItems.status === 'loaded' ? modelItems.payload : [],
                  activeItem: model,
                  defaultOption: modelDefaultOption,
                  handleSelectItem: handleSetModel,
                  disabled: make === 0,
                  isLoading: modelItems.status === 'loading',
                }}
                year={{
                  label: '',
                  items: yearItems,
                  activeItem: year,
                  defaultOption: yearDefaultOption,
                  handleSelectItem: setYear,
                }}
                price={{
                  label: '',
                  items: priceItems,
                  activeItem: price,
                  defaultOption: priceDefaultOption,
                  handleSelectItem: setPrice,
                }}
                version={{
                  label: 'Versão',
                  items: versionItems.status === 'loaded' ? versionItems.payload : [],
                  activeItem: version,
                  defaultOption: versionDefaultOption,
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
              <Card key={1}>
                <Example>Exemplo</Example>
              </Card>,
            ]}
          />
        }
        lastSearches={lastSearches.length ? <LastSearchesCards cards={lastSearches} /> : <></>}
      />
    </>
  )
}
