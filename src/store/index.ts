import { combineReducers, createStore } from 'redux'
import debounce from 'lodash/debounce'

import { lastSearchesReducer } from 'src/store/last-searches/reducers'
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from 'src/utils/functions/handleLocalStorage'

const rootReducer = combineReducers({
  lastSearches: lastSearchesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const localState = loadStateFromLocalStorage()
const store = createStore(rootReducer, localState)

store.subscribe(
  debounce(() => {
    saveStateToLocalStorage(store.getState())
  }, 1000),
)

export default store
