import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Clock extends Component {
    timerID: number | undefined;
    constructor(props: {}) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
  render() {
    return (
      <div>
         <div>
          
          <div>Thời gian hiện tại: {this.state.date.toLocaleTimeString()}.</div>
        </div>
      
      </div>
    )
  } 
}
 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock />);

// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
