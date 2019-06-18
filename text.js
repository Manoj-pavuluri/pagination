// import React, { Component } from 'react'

// export default class Text extends Component {
//   state = {
//     visible: true, read: false, read1: false,read2:false
//   }
//   handleClick = () => {
//     this.setState({ visible: false, read: true })
//   }
//   handlecahnge = () => {
//     this.setState({ visible: false, read: false, read1: true })
//   }
//   handle1 = () => {
//     this.setState({ visible: false, read: false, read1: false,read2:true })
//   }
//   handle2 = () => {
//     this.setState({ visible: true, read: false, read1: false,read2:false })
//   }



// render() {
//   return (
//     <div>
//       {this.state.visible ? 
//       <button onClick={this.handleClick} style={{ backgroundColor: 'red' }}>hello</button> 
//       : 
//       this.state.read ? <
//         button onClick={this.handlecahnge} style={{ backgroundColor: 'blue' }}>hello</button> 
//         : 
//         this.state.read1 ? <button onClick={this.handle1} style={{ backgroundColor: 'green' }}>hello</button>
//          : 
//         this.state.read2?
//         <button onClick={this.handle2} style={{ backgroundColor: 'yellow' }}>hello</button>:this.state.visible 
//         ? <button onClick={this.handleClick} style={{ backgroundColor: 'red' }}>hello</button>:null}
//     </div>
//   )
// }
// }


// import React, { Component } from 'react'

// export default class Text extends Component {
//   state = {
//          visible: true,read:false
//      }
//      handleClick = () => {
//           this.setState({ visible: false ,read:true})
//        }
//        onFocus=()=>{
//          this.setState({read:false})
//        }
//   render() {
//     return (
//       <div>
//        {this.state.visible ? <button onClick={this.handleClick} style={{ backgroundColor: 'red' }}>hello</button>:this.state.read?<input type="text" className="col-md-5" onFocus={this.onFocus}/>:<input type="text" className="col-md-12" onChange={this.onFocus1} value="manoj" readonly/> }
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';

export default class Text extends Component {
  constructor(){
    super()
      this.refsInput = React.createRef();
  }
  // componentDidMount(){
  //   this.refsInput.current.focus()
  // }
  render() {
    return (
      <div>
        <input type="text" 
         autoFocus />
        <input type="text" autoFocus/>
      </div>
    )
  }
}


// import React from 'react';

// class Text extends React.Component {
//    constructor() {
//       super();
//       this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//    };
//    forceUpdateHandler() {
//       this.forceUpdate();
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
//             <h4>Random number: {Math.random()}</h4>
//          </div>
//       );
//    }
// }

// export default Text;