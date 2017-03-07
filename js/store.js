import { createStore } from 'redux'
import hiosApp from './reducers'

const hiosApp = combineReducers({
  playerReducer
}); 

let store = createStore(hiosApp)