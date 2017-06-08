import { MatchedRoute } from './Route'
import { Route } from './Route'

export interface IRouteProps {
  $route: MatchedRoute,
  $push: (name: string, params?: any, query?: any) => void,
  $replace: (name: string, params?: any, query?: any) => void,
}

export interface IRouteOption {
  name: string,
  path: string,
  exact?: boolean,
  strict?: boolean,
  component: React.ComponentClass<IRouteProps>,
  routes?: IRouteOption[],
  meta?: any
}

export interface IRouteMap {
  [name: string]: Route
}

function parseRoute (option: IRouteOption, map: IRouteMap, parent: string = ''): Route {
  const {name, path, exact, strict, component, routes, meta} = option
  parent = parent === '/' ? '' : parent
  const route = new Route({
    name,
    path: parent + (path.startsWith('/') ? path : '/' + path),
    exact: !!exact,
    strict: !!strict,
    component,
    meta
  })
  route.routes = routes ? routes.map((o) => parseRoute(o, map, route.path)) : []
  if (map[name]) {
    throw new Error('Already existed route name: ' + name)
  } else {
    map[name] = route
  }
  return route
}

export default function (options: IRouteOption[], mount: string = '') {
  const routeMap: IRouteMap = {}
  const routes = options.map((option) => parseRoute(option, routeMap, mount))

  return {routeMap, routes}
}
