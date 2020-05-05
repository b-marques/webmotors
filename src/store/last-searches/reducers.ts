import { LastSearchesState } from './types'
import { ADD_LAST_SEARCH, LastSearchesActionTypes } from './actionsTypes'

const LAST_SEARCHES_LENGTH = 4

const initialState: LastSearchesState = []

export function lastSearchesReducer(
  state = initialState,
  action: LastSearchesActionTypes,
): LastSearchesState {
  switch (action.type) {
    case ADD_LAST_SEARCH:
      if (state.length === LAST_SEARCHES_LENGTH) {
        return [action.payload, ...state.slice(0, LAST_SEARCHES_LENGTH - 1)]
      }
      return [action.payload, ...state]
    default:
      return state
  }
}
