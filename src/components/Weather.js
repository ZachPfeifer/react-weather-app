import React from 'react'

const Weather = props => (
  <div>
    {props.city && props && <p> Location: {props.city},  {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>
    }
    {props.description && <p>Conditions: {props.description}</p>
    }
    {/* ERROR CATCH */}
    {props.error && <p>{props.error}</p>}
  </div>
)

export default Weather


// export default class Weather extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.city && this.props && <p> Location: {this.props.city},  {this.props.country}</p>}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p >
//         }
//         {this.props.description && <p>Conditions: {this.props.description}</p>
//         }
//         {/* ERROR CATCH */}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     )
//   }
// }


