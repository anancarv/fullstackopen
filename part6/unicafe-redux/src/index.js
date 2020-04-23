import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <button onClick={() => store.dispatch({type: 'GOOD'})}>good</button>
      <button onClick={() => store.dispatch({type: 'OK'})}>neutral</button>
      <button onClick={() => store.dispatch({type: 'BAD'})}>bad</button>
      <button onClick={() => store.dispatch({type: 'ZERO'})}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
