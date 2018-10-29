import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name:'anu',age: 30,id:1},
      {name:'ram',age: 12,id:2},
      {name:'vipi',age: 45,id:3},

    ]
  }
  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
    </div>

    );
  }
}

export default App;
