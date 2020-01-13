import Router from 'next/router'
import redirectToRoute from './redirectToRoute'

const doAfterRouteChange = (...args) => {
  const route = args.length === 2 ? args[0] : undefined
  const fn = args.length === 2 ? args[1] : args[0]

  const fnToRun = () => {
    fn()
    Router.events.off('routeChangeComplete', fnToRun)
  }

  Router.events.on('routeChangeComplete', fnToRun)

  if (route) {
    redirectToRoute(route)
  }
}

export default doAfterRouteChange
