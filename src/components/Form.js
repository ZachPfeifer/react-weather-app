import React from 'react'

const Form = props => (
  <div >
    <form className="input-group mb-3" onSubmit={props.getWeather} >
      <span>
      </span>
      <input className="form-control rounded" type="text" name="city" placeholder="City.." />
      <input className="form-control rounded" type="text" name="country" placeholder="Country.." />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-light rounded" type="submit" id="button-addon2"> Get Weather</button>
      </div>
    </form>
  </div>
)


export default Form;

// export default class Form extends Component {
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.props.getWeather}>
//           <input type="text" name="city" placeholder="City.." />
//           <input type="text" name="country" placeholder="Country.." />
//           <button type="submit"> Get Weather</button>
//         </form>
//       </div>
//     )
//   }
// }
