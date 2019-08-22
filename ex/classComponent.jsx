import React, { Component } from 'react'
export default class ClassComponent extends Component{
  render() {
    return(
        <div>
          <h1> Idade </h1>
          <h2> {this.props.idade} </h2>
          <h3> <button> Incrementa </button> </h3>
          <h3> <button> Decrementa </button> </h3>
        </div>
    )
  }
}