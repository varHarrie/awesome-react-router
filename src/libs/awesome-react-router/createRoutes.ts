import RouteNode, {IRouteNode} from './RouteNode'

export default function (routes: IRouteNode[]): RouteNode[] {
  return routes.map((r) => new RouteNode(r))
}
