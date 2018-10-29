import React , { Component } from 'react';

class Ninjas extends Component {
  render () {
    const ninjaList = this.props.ninjas.map(ninja => {
      return ninja.age > 20 ? (
        <div className="ninja" key={ninja.id}>
          <div>Name: { ninja.name}</div>
          <div>age: {ninja.age}</div>
        </div>
      ) : null;

    })
    return (
      <div className="ninja-list" >
        {ninjaList}
      </div>
    );
  }
}
export default Ninjas;
