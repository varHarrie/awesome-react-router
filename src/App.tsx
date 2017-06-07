import * as React from 'react'
import './App.css'
import Router from './libs/awesome-react-router/Router'
import routes from './routes'

class App extends React.Component<{}, null> {
  render () {
    return (
      <div className='App'>
        <Router routers={routes}>
          test
        </Router>
      </div>
    )
  }
}

export default App
