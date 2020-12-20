import React, { FC } from 'react'

import CounterBoard from 'containers/organisms/CounterBoard'
import ColorfulBeads from 'containers/molecules/ColorfulBeads'
import './App.css'

const App: FC = () => (
  <div className="App">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <CounterBoard />
    <ColorfulBeads />
  </div>
)

export default App
