import React , { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt:null
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={this.handleChange}/>
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={this.handleChange}/>
        <label htmlFor="belt">Belt:</label>
        <input type="text" id="belt" onChange={this.handleChange}/>
        <button>submit</button>
      </form>
    );

  }
}
export default AddNinja;
