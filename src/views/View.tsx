import * as React from 'react'
import {Scene, IRouteProps} from '../libs/conductor'

interface IViewProps extends IRouteProps {
}

interface IViewState {}

export default class View extends React.Component<IViewProps, IViewState> {

  onClick = () => {
    this.props.$push('member')
  }

  render () {
    const route = this.props.$route
    console.log(route)
    return (
      <div>
        <div>{route.name}</div>
        <div>
          <button onClick={this.onClick}>click</button>
        </div>
        <Scene/>
      </div>
    )
  }
}
