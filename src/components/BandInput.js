import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, FormText, Input } from 'reactstrap';

class BandInput extends Component{
  constructor(){
    super();
    this.state={
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e){
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

// Below we are going to be using the dispatch function from createStore.js in order
// to change our state. We are sending in the tyoe and then the band data as an object.
handleOnSubmit(e){
  e.preventDefault();
  this.props.store.dispatch({
      type: 'ADD_BAND',
      band: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email
      }
  })
}
  render(){
      const style = {
        width: '50%',
        margin: '2%'
      }
    return(
          <div style={style}>
              <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input type="text" onChange={ this.handleOnChange } name='firstName'/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input type="text" onChange={ this.handleOnChange } name='lastName'/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Phone</Label>
                      <Input type="phone" onChange={ this.handleOnChange } name='phone'/>
                    </FormGroup>
                    <FormGroup>
                      <Label>E-mail</Label>
                      <Input type="email" onChange={ this.handleOnChange } name='email'/>
                    </FormGroup>
                    <Button type='submit' color="success">Submit</Button>
              </Form>
        </div>
    )
  }
}

export default BandInput;
