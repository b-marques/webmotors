export const radiusItems = [
  { id: 1, name: '50km' },
  { id: 2, name: '100km' },
  { id: 3, name: '150km' },
  { id: 4, name: '200km' },
  { id: 5, name: '400km' },
  { id: 6, name: '1000km' },
]

export const yearItems = [...Array(26).keys()].map(n => ({
  id: n + 1,
  name: `${2020 - n}`,
}))

export const priceItems = [
  { id: 1, name: '0,00 ~ 5.000,00' },
  { id: 2, name: '5.001,00 ~ 10.000,00' },
  { id: 3, name: '10.001,00 ~ 20.000,00' },
  { id: 4, name: '20.001,00 ~ 40.000,00' },
  { id: 5, name: '40.001,00 ~ 80.000,00' },
  { id: 6, name: 'acima de 80.000,00' },
]
