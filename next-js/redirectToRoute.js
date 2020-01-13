const Router = require('next/router')
const isServer = require('./isServer')

const redirectToRoute = (route, ctx = {}) => {
  if (isServer() && Object.keys(ctx).length === 0) {
    // eslint-disable-next-line
    return console.error(
      'You seem to be using redirectToRoute on the server without providing ctx as second argument. In order to use redirectToRoute from server side you have to provide ctx as second argument.'
    )
  }

  if (isServer()) {
    ctx.res.writeHead(302, { Location: route })
    ctx.res.end()
  } else {
    Router.default.push(route)
  }
}

module.exports = redirectToRoute
