import * as React from 'react'
import { Switch, Route } from 'react-router'

interface IRouterViewProps {}

interface IRouterViewState {}

export default class RouterView extends React.Component<IRouterViewProps, IRouterViewState> {

  constructor (props: IRouterViewProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} exact={route.exact} strict={route.strict} render={(props) => (
            <route.component {...props} route={route}/>
          )}/>
        ))}
      </Switch>
    )
  }
}
