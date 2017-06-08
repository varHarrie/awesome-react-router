import * as PropTypes from 'prop-types'
import * as React from 'react'
import Route from './Route'
import RouteNode from './RouteNode'
import { Switch } from 'react-router'

interface IRouterViewProps {}

interface IRouterViewState {}

export default class RouterView extends React.Component<IRouterViewProps, IRouterViewState> {

  static contextTypes = {
    $routes: PropTypes.any
  }

  constructor (props: IRouterViewProps) {
    super(props)
    this.state = {}
  }

  render () {
    const $routes: RouteNode[] = this.context.$routes
    return (
      <Switch>
        {$routes.map((route, i) => {
          return (
            <Route key={i} path={route.path} exact={route.exact} strict={route.strict} route={route}/>
          )
        })}
      </Switch>
    )
  }
}
