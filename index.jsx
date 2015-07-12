import React from 'react'
import Spring from 'react-motion'
import objectAssign from 'object-assign'

export var Toggle = {
  Grow: React.createClass({
    render() {
      let props = objectAssign({
        origin: 'left top',
        display: 'block',
      }, this.props)
      return (
        <Spring
          endValue={{
            scale: {
              val: props.toggled ? 1 : 0,
              config: [200, 20],
            },
            opacity: {
              val: props.toggled ? 1 : 0,
            },
          }}
        >{
          interpolated => {
            let style = {
              transformOrigin: props.origin || 'left top',
              transform: `scale(${interpolated.scale.val})`,
              opacity: interpolated.opacity.val,
              display: interpolated.opacity.val > 0 ? props.display : 'none',
            }
            return props.children(style)
          }
        }</Spring>
      )
    },
  }),
}

