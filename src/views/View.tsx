import * as React from 'react'

interface IViewProps {}

interface IViewState {}

export default class View extends React.Component<IViewProps, IViewState> {

  constructor (props: IViewProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>test</div>
    )
  }
}
