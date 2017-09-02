import React, { Component } from 'react';



class BandInput extends Component{
  constructor(){
    super();
    this.state={
      text: ""
    }
  }

  handleOnChange(e){
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

// Below we are going to be using the dispatch function from createStore.js in order
// to change our state. We are sending in the tyoe and then the band data as an object.
handleOnSubmit(e){
  e.preventDefault();


}
  render(){
    return(
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChange(event)} />
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default BandInput;
