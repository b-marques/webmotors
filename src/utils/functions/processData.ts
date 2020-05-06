export function processMakes(data: any) {
  return data.map(({ ID: id, Name: name }: any) => ({
    id,
    name,
  }))
}

export function processModels(data: any) {
  return data.map(({ ID: id, Name: name }: any) => ({
    id,
    name,
  }))
}

export function processVersions(data: any) {
  return data.map(({ ID: id, Name: name }: any) => ({
    id,
    name,
  }))
}

export function processVehicles(data: any) {
  return data.map(
    ({
      ID: id,
      Make: make,
      Model: model,
      Version: version,
      Image: image,
      KM: km,
      Price: price,
      YearModel: yearModel,
      YearFab: yearFab,
    }: any) => ({
      id,
      make,
      model,
      version,
      image,
      km,
      price,
      yearModel,
      yearFab,
    }),
  )
}
