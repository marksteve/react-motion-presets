import React from 'react'
import Spring from 'react-motion'

export var Toggle = {
  Grow: React.createClass({
    render() {
      let {toggled, origin, display} = this.props
      origin = origin || 'left top'
      display = display || 'block'
      return (
        <Spring
          endValue={{
            scale: {
              val: toggled ? 1 : 0,
              config: [200, 20],
            },
            opacity: {
              val: toggled ? 1 : 0,
            },
          }}
        >{
          interpolated => {
            let style = {
              transformOrigin: origin || 'left top',
              transform: `scale(${interpolated.scale.val})`,
              opacity: interpolated.opacity.val,
              display: interpolated.opacity.val > 0 ? display : 'none',
            }
            return this.props.children(style)
          }
        }</Spring>
      )
    },
  }),
}

