import * as React from 'react'
import Router from './libs/awesome-react-router/Router'
import RouterView from './libs/awesome-react-router/RouterView'
import routes from './routes'
import './App.css'

class App extends React.Component<{}, null> {
  render () {
    return (
      <div className='App'>
        <Router routers={routes}>
          <div>
            <div>App</div>
            <RouterView/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
