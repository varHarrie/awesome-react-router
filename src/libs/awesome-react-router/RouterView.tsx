import * as PropTypes from 'prop-types'
import * as React from 'react'
import RouteNode from './RouteNode'
import { Route as OriginalRoute, Switch } from 'react-router'

class Route extends OriginalRoute {
  static childContextTypes = {
    $routes: PropTypes.any
  }

  getChildContextTypes = () => {
    return {
      $routes: (this.props as any).route.routes
    }
  }
}

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
          console.log(route)
          return (
            <Route key={i} path={route.path} exact={route.exact} strict={route.strict} render={(props) => (
              <route.component {...props} route={route}/>
            )}/>
          )
        })}
      </Switch>
    )
  }
}
