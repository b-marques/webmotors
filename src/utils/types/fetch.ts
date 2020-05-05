type FetchInit = {
  status: 'init'
}

type FetchLoading = {
  status: 'loading'
}

type FetchLoaded = {
  status: 'loaded'
  payload: []
}

type FetchError = {
  status: 'error'
  error: Error
}

export type Fetch = FetchInit | FetchLoading | FetchLoaded | FetchError
