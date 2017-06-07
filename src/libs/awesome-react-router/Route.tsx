import * as React from 'react'
import RouteNode from './RouteNode'
import { Route as OriginalRoute, RouteProps } from 'react-router'

interface IRouteProps extends RouteProps {
  route: RouteNode
}

export default class Route extends React.Component<IRouteProps, void> {
  render () {
    const {route, ...rest} = this.props
    return (
      <OriginalRoute {...rest}/>
    )
  }
}
