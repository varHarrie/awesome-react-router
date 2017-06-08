import * as React from 'react'
import RouteNode from '../libs/awesome-react-router/RouteNode'
import RouterView from '../libs/awesome-react-router/RouterView'

interface IViewProps {
  route: RouteNode
}

interface IViewState {}

export default class View extends React.Component<IViewProps, IViewState> {

  constructor (props: IViewProps) {
    console.log('view')
    super(props)
    this.state = {}
  }

  render () {
    const route = this.props.route
    return (
      <div>
        <div>{route.name}</div>
        <RouterView/>
      </div>
    )
  }
}
