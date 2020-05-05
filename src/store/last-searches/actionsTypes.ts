import { Search } from './types'

export const ADD_LAST_SEARCH = 'ADD_LAST_SEARCH'

type AddLastSearchAction = {
  type: typeof ADD_LAST_SEARCH
  payload: Search
}

export type LastSearchesActionTypes = AddLastSearchAction
