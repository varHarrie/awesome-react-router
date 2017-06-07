import * as React from 'react'

export interface IRouteNode {
  name: string,
  path: string,
  exact?: boolean,
  strict?: boolean,
  component: React.ComponentClass<any>,
  routes?: IRouteNode[],
  meta?: any
}

export default class RouteNode implements IRouteNode{
  name: string
  path: string
  exact: boolean
  strict: boolean
  component: React.ComponentClass<any>
  routes: RouteNode[]
  meta?: any

  constructor (options: IRouteNode, parent: string = '') {
    const {name, path, exact, strict, component, routes, meta} = options
    parent = parent === '/' ? '' : parent
    this.name = name
    this.path = parent + path.startsWith('/') ? path : '/' + path
    this.exact = !!exact
    this.strict = !!strict
    this.component = component
    this.meta = meta

    this.routes = routes ? routes.map((r) => new RouteNode(r, this.path)) : []
  }
  
}
