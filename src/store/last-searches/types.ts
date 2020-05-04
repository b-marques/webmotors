export type Make = {
  id: number
  name: string
}

export type Model = {
  id: number
  name: string
}

export type Version = {
  id: number
  name: string
}

export type Year = {
  id: number
  name: string
}

export type Radius = {
  id: number
  name: string
}

export type Price = {
  id: number
  name: string
}

export type Search = {
  isNew: boolean
  isUsed: boolean
  location: string
  radius: Radius
  make: Make
  model: Model
  year: Year
  price: Price
  version: Version
}

export type LastSearchesState = Search[]
