import * as PropTypes from 'prop-types'
import * as React from 'react'
import RouteNode from './RouteNode'
import { Route as OriginalRoute, RouteProps } from 'react-router'

interface IRouteProps extends RouteProps {
  route: RouteNode
}

export default class Route extends React.Component<IRouteProps, void> {
  static childContextTypes = {
    $routes: PropTypes.any
  }

  getChildContext = () => {
    return {
      $routes: this.props.route.routes
    }
  }

  render () {
    const route = this.props.route
    return (
      <OriginalRoute path={route.path} exact={route.exact} strict={route.strict} render={(props) => (
        <route.component $route={route}/>
      )}/>
    )
  }
}
