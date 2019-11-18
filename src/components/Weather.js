import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props && <p> Location: {this.props.city},  {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p >
        }
        {this.props.description && <p>Conditions: {this.props.description}</p>
        }
        {/* ERROR CATCH */}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}
