import React from 'react'

const Weather = props => (
  <div className="card">
    <div className="card-header">
      Details
   </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> {props.city && props && <p> Location: {props.city},  {props.country}</p>}</li>
      <li className="list-group-item">{props.temperature && <p>Temperature: {props.temperature} °F</p>}</li>
      <li className="list-group-item">{props.humidity && <p>Humidity: {props.humidity}</p>
      }</li>
      <li className="list-group-item">{props.description && <p>Conditions: {props.description}</p>
      }</li>
    </ul>

    {/* ERROR CATCH */}
    {props.error && <p>{props.error}</p>}

  </div>
)


//   < div class="card" style = "width: 18rem;" >
//     <div class="card-header">
//       Featured
//   </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Cras justo odio</li>
//       <li class="list-group-item">Dapibus ac facilisis in</li>
//       <li class="list-group-item">Vestibulum at eros</li>
//     </ul>
// </div >

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


