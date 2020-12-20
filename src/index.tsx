import React from 'react'
import ReactDOM from 'react-dom'

import { counterSlice } from 'features/counter'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const store = configureStore({ reducer: counterSlice.reducer })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
