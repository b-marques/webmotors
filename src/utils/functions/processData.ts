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
