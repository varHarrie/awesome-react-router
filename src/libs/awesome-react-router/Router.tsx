import * as React from 'react'
import RouteNode from './RouteNode'
import {createBrowserHistory, History} from 'history'
import {Router as OriginalRouter} from 'react-router'

interface IRouterProps {
  history?: History,
  routers: RouteNode[],
  children: React.ReactNode
}

interface IRouterState {}

export default class Router extends React.Component<IRouterProps, IRouterState> {

  history: History

  componentWillMount () {
    this.history = this.props.history || createBrowserHistory()
  }

  render (): JSX.Element {
    const {children} = this.props
    return <OriginalRouter history={this.history} children={children}/>
  }
}
