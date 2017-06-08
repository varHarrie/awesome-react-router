import { matchPath } from 'react-router'
import * as qs from 'query-string'

interface IRoute {
  name: string
  path: string
  exact: boolean
  strict: boolean
  component: React.ComponentClass<any>
  meta?: any
}

export class Route implements IRoute {
  name: string
  path: string
  exact: boolean
  strict: boolean
  component: React.ComponentClass<any>
  routes: Route[]
  meta?: any

  constructor ({
    name,
    path,
    exact,
    strict,
    component,
    meta
  }: IRoute) {
    this.name = name
    this.path = path
    this.exact = exact
    this.strict = strict
    this.component = component
    this.meta = meta
  }
}

export class MatchedRoute<P = any, Q = any> extends Route {
  name: string
  path: string
  exact: boolean
  strict: boolean
  component: React.ComponentClass<any>
  meta?: any
  params: P = {} as any
  query: Q = {} as any
  url: string
  search: string

  constructor (options: IRoute, url: string, search: string) {
    super(options)

    const match = matchPath<any>(url, this)
    if (match) {
      this.params = match.params
    }
    if (search) {
      this.query = qs.parse(search)
    }

    this.url = url
    this.search = search
  }
}
