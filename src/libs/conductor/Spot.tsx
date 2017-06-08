import * as PropTypes from 'prop-types'
import * as React from 'react'
import { IRouteProps } from './parseRoutes'
import { MatchedRoute, Route } from './Route'
import { RouteComponentProps } from 'react-router'

interface ISpotProps extends RouteComponentProps<any> {
  route: Route,
  component: React.ComponentClass<IRouteProps>
}

interface ISpotState {
  route: MatchedRoute
}

export default class Spot extends React.Component<ISpotProps, ISpotState> {

  static contextTypes = {
    $push: PropTypes.func,
    $replace: PropTypes.func,
  }

  static childContextTypes = {
    $routes: PropTypes.any
  }

  push = (name: string, params?: any, query?: any) => {
    const matchRoute = this.state.route
    if (matchRoute.name === name) {
      params = Object.assign({}, matchRoute.params, params)
      query = Object.assign({}, matchRoute.query, query)
    }
    this.context.$push(name, params, query)
  }

  replace = (name: string, params?: any, query?: any) => {
    const matchRoute = this.state.route
    if (matchRoute.name === name) {
      params = Object.assign({}, matchRoute.params, params)
      query = Object.assign({}, matchRoute.query, query)
    }
    this.context.$replace(name, params, query)
  }

  constructor (props: ISpotProps) {
    super(props)

    const {route, location} = this.props
    const {pathname, search} = location
    this.state = {
      route: new MatchedRoute(route, pathname, search)
    }
  }

  getChildContext = () => {
    return {
      $routes: this.props.route.routes
    }
  }

  componentWillReceiveProps ({route, location}: ISpotProps) {
    const {url, search} = this.state.route
    if (url !== location.pathname || search !== location.pathname) {
      this.setState({
        route: new MatchedRoute(route, location.pathname, location.search)
      })
    }
  }
  
  render () {
    const Component = this.props.component
    const route = this.state.route
    return <Component $route={route} $push={this.push} $replace={this.replace}/>
  }
}