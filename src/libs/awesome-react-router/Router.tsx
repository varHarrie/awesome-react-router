import * as PropTypes from 'prop-types'
import * as React from 'react'
import RouteNode from './RouteNode'
import { createBrowserHistory, History } from 'history'
import { Router as OriginalRouter } from 'react-router'

interface IRouterProps {
  history?: History,
  routers: RouteNode[],
  children: React.ReactNode
}

interface IRouterState {}

export default class Router extends React.Component<IRouterProps, IRouterState> {

  static childContextTypes = {
    $routes: PropTypes.any
  }

  history: History

  componentWillMount () {
    this.history = this.props.history || createBrowserHistory()
  }

  getChildContext = () => {
    return {
      $routes: this.props.routers
    }
  }

  render (): JSX.Element {
    const {children} = this.props
    return <OriginalRouter history={this.history} children={children}/>
  }
}
