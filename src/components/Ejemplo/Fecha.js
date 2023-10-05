
import React from 'react';
 
class Fecha extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Fecha actual y hora : {this.state.curDT}</p>
      </div>
    );
  }
}
 
export default Fecha;