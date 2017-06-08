import * as PropTypes from 'prop-types'
import * as qs from 'query-string'
import * as React from 'react'
import parseRoutes, { IRouteMap, IRouteOption } from './parseRoutes'
import { createBrowserHistory, History } from 'history'
import { Route } from './Route'
import { Router as OriginalRouter } from 'react-router'

interface IRouterProps {
  history?: History,
  routes: IRouteOption[],
  mount?: string,
  children: React.ReactNode
}

export default class Conductor extends React.Component<IRouterProps, void> {

  static childContextTypes = {
    $routes: PropTypes.any,
    $push: PropTypes.func,
    $replace: PropTypes.func
  }

  history: History
  routes: Route[]
  routeMap: IRouteMap

  componentWillMount () {
    const {history, routes, mount} = this.props
    this.history = history || createBrowserHistory()
    const rs = parseRoutes(routes, mount)
    this.routes = rs.routes
    this.routeMap = rs.routeMap
  }

  getChildContext = () => {
    return {
      $routes: this.routes,
      $push: this.push,
      $replace: this.replace
    }
  }

  stringify (route: string, params: any = {}, query?: any) {
    let url = route.split('/').map((piece) => {
      if (piece && piece[0] === ':') {
        return params[piece.slice(1)] || 'undefined'
      }
      return piece
    }).join('/')

    if (query) {
      url += '?' + qs.stringify(query)
    }

    return url
  }

  push = (name: string, params?: any, query?: any) => {
    const route = this.routeMap[name]
    if (!route) {
      throw new Error('Cannot found route name: ' + name)
    }

    this.history.push(this.stringify(route.path, params, query))
  }

  replace = (name: string, params?: any, query?: any) => {
    const route = this.routeMap[name]
    if (!route) {
      throw new Error('Cannot found route: ' + name)
    }

    this.history.replace(this.stringify(route.path, params, query))
  }

  render (): JSX.Element {
    const {children} = this.props
    return <OriginalRouter history={this.history} children={children}/>
  }
}
