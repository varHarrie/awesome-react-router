import * as PropTypes from 'prop-types'
import * as React from 'react'
import Spot from './Spot'
import { Route } from './Route'
import { Route as OriginalRoute } from 'react-router'
import { Switch } from 'react-router'

interface ISceneProps {}

export default class Scene extends React.Component<ISceneProps, void> {

  static contextTypes = {
    $routes: PropTypes.any
  }

  render () {
    const $routes: Route[] = this.context.$routes
    return (
      <Switch>
        {$routes.map((route, i) => (
          <OriginalRoute
            key={i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => (
              <Spot
                {...props}
                route={route}
                component={route.component}/>
            )}/>
        ))}
      </Switch>
    )
  }
}
