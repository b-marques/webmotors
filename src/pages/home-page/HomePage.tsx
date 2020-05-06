import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaCarSide, FaMotorcycle } from 'react-icons/fa'

import {
  processMakes,
  processModels,
  processVersions,
  processVehicles,
} from 'src/utils/functions/processData'
import { priceItems, radiusItems, yearItems } from 'src/utils/samples/items'
import {
  makeDefaultOption,
  modelDefaultOption,
  priceDefaultOption,
  radiusDefaultOption,
  versionDefaultOption,
  yearDefaultOption,
} from 'src/utils/samples/defaultOptions'
import { useFetchData } from 'src/utils/hooks/useFetchData'
import { addLastSearch } from 'src/store/last-searches/actions'
import { Make, Model, Version, Radius, Year } from 'src/store/last-searches/types'
import { RootState } from 'src/store'
import { TabDisplayer } from 'src/components/molecules/tab-displayer'
import { FilterBox } from 'src/components/organisms/filter-box'
import { HomeTemplate } from 'src/components/templates/home-template'
import { Navbar } from 'src/components/atoms/navbar'
import { Card } from 'src/components/atoms/card'
import { Example } from 'src/utils/samples/exampleTabContent'
import { LastSearchesCards } from 'src/components/molecules/last-searches-cards'
import { Button } from 'src/components/atoms/button'
import { VehicleCardGrid } from 'src/components/molecules/vehicle-card-grid'
import { useScroll } from 'src/utils/hooks/useScroll'
import { VehicleCard } from 'src/components/atoms/vehicle-card'

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

  const [page, setPage] = useState(1)
  const [vehicles, setVehicles] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const [filteredVehicles, setFilteredVehicles] = useState([])

  const fetchMake = useFetchData(`${API_URL}Make`, {}, true, processMakes)
  const fetchModel = useFetchData(`${API_URL}Model`, { MakeID: make }, make !== 0, processModels)
  const fetchVersion = useFetchData(
    `${API_URL}Version`,
    { ModelID: model },
    model !== 0,
    processVersions,
  )

  const updateVehicles = useCallback((newData: []) => {
    setVehicles(vehicles => [...vehicles, ...newData])
    setFilteredVehicles(filtered => [...filtered, ...newData])
  }, [])

  const updateHasMore = useCallback((value: boolean) => {
    setHasMore(value)
  }, [])

  const fetchVehicles = useFetchData(
    `${API_URL}Vehicles`,
    { Page: page },
    hasMore,
    processVehicles,
    updateVehicles,
    updateHasMore,
  )

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return
    setPage(page => page + 1)
  }, [])

  useScroll(handleScroll)

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
    const makeOption =
      fetchMake.status === 'loaded'
        ? fetchMake.payload.find((e: Make) => e.id === make) ?? makeDefaultOption
        : makeDefaultOption

    const modelOption =
      fetchModel.status === 'loaded'
        ? fetchModel.payload.find((e: Model) => e.id === model) ?? modelDefaultOption
        : modelDefaultOption

    const versionOption =
      fetchVersion.status === 'loaded'
        ? fetchVersion.payload.find((e: Version) => e.id === version) ?? versionDefaultOption
        : versionDefaultOption

    dispatch(
      addLastSearch({
        isNew,
        isUsed,
        location: locationValue,
        make: makeOption,
        model: modelOption,
        price: { id: 0, name: '' },
        radius: radiusItems.find((e: Radius) => e.id === radius) ?? radiusDefaultOption,
        version: versionOption,
        year: yearItems.find((e: Year) => e.id === year) ?? yearDefaultOption,
      }),
    )

    let newFilteredVehicles = [...vehicles]
    if (makeOption.id !== 0)
      newFilteredVehicles = newFilteredVehicles.filter(
        (vehicle: React.ComponentProps<typeof VehicleCard>) => vehicle.make === makeOption.name,
      )

    if (modelOption.id !== 0)
      newFilteredVehicles = newFilteredVehicles.filter(
        (vehicle: React.ComponentProps<typeof VehicleCard>) => vehicle.model === modelOption.name,
      )

    if (versionOption.id !== 0)
      newFilteredVehicles = newFilteredVehicles.filter(
        (vehicle: React.ComponentProps<typeof VehicleCard>) => vehicle.version === modelOption.name,
      )

    setFilteredVehicles(newFilteredVehicles)
  }

  function handleSellMyCar() {
    console.log('redirects to sell page')
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
                  items: fetchMake.status === 'loaded' ? fetchMake.payload : [],
                  activeItem: make,
                  defaultOption: makeDefaultOption,
                  handleSelectItem: handleSetMake,
                  isLoading: fetchMake.status === 'loading',
                }}
                model={{
                  label: 'Modelo',
                  items: fetchModel.status === 'loaded' ? fetchModel.payload : [],
                  activeItem: model,
                  defaultOption: modelDefaultOption,
                  handleSelectItem: handleSetModel,
                  disabled: make === 0,
                  isLoading: fetchModel.status === 'loading',
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
                  items: fetchVersion.status === 'loaded' ? fetchVersion.payload : [],
                  activeItem: version,
                  defaultOption: versionDefaultOption,
                  handleSelectItem: setVersion,
                  disabled: model === 0,
                  isLoading: fetchVersion.status === 'loading',
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
        sellMyCarButton={
          <Button
            size="medium"
            variant="outlined"
            onClick={handleSellMyCar}
            color="yellow"
            label="Vender meu carro"
          />
        }
        lastSearches={lastSearches.length ? <LastSearchesCards cards={lastSearches} /> : <></>}
        vehicleCards={
          <VehicleCardGrid
            cards={filteredVehicles}
            isLoading={fetchVehicles.status === 'loading'}
          />
        }
      />
    </>
  )
}
