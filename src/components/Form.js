import React, { Component } from 'react'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City.." />
    <input type="text" name="country" placeholder="Country.." />
    <button type="submit"> Get Weather</button>
  </form>
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
