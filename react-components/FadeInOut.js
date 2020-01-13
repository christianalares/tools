import { useTransition, animated } from 'react-spring'
import { Fragment } from 'react'

const FadeInOut = ({ children, duration = 300, show, component = 'div', ...rest }) => {
  const hasChildren = !!React.Children.count(children)
  const Elem = animated[component]

  const transitions = useTransition(show, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: {
      duration
    }
  })

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Fragment key={key}>
              {hasChildren ? (
                <Elem style={props} {...rest}>
                  {children}
                </Elem>
              ) : (
                <Elem key={key} style={props} {...rest} />
              )}
            </Fragment>
          )
      )}
    </>
  )
}

export default FadeInOut
