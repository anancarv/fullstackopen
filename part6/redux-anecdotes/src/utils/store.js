import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from '../reducers/anecdoteReducer'

const store = createStore(
    anecdoteReducer,
    composeWithDevTools()
)

export default store