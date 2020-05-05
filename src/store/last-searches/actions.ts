import { Search } from './types'
import { ADD_LAST_SEARCH, LastSearchesActionTypes } from './actionsTypes'

export function addLastSearch(search: Search): LastSearchesActionTypes {
  return {
    type: ADD_LAST_SEARCH,
    payload: search,
  }
}
