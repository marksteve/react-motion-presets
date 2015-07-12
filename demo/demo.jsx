import React from 'react'
import {Toggle} from '../index.jsx'

var Demo = React.createClass({
  getInitialState() {
    return {
      toggleGrow: false,
    }
  },
  render() {
    return (
      <div>

        <h2>Toggle.Grow</h2>
        <pre>
          <code>{atob("PFRvZ2dsZS5Hcm93IHRvZ2dsZWQ9e3RoaXMuc3RhdGUudG9nZ2xlR3Jvd30+CiAge3N0eWxlID0+CiAgICA8ZGl2IGNsYXNzTmFtZT0iYm94IGdyb3ciIHN0eWxlPXtzdHlsZX0gLz4KICB9CjwvVG9nZ2xlLkdyb3c+Cg==")}</code>
        </pre>
        <p>
          <button
            onClick={this.setState.bind(this, (prevState) => {
              return {toggleGrow: !prevState.toggleGrow}
            }, null)}
          >
            Toggle
          </button>
        </p>
        <Toggle.Grow toggled={this.state.toggleGrow}>
          {style =>
            <div className="box grow" style={style} />
          }
        </Toggle.Grow>

      </div>
    )
  },
})

React.render(
  <Demo />,
  document.getElementById('demo')
)
