import * as React from 'react'
import {Conductor, Scene} from './libs/conductor'
import routes from './routes'
import './App.css'

class App extends React.Component<{}, null> {
  render () {
    return (
      <div className='App'>
        <Conductor routes={routes}>
          <div>
            <div>App</div>
            <Scene/>
          </div>
        </Conductor>
      </div>
    )
  }
}

export default App
