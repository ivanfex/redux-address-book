import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
class Band extends Component {

    handleClick(e){
        e.preventDefault();
        this.props.store.dispatch({
            type: 'DELETE_BAND',
            id: this.props.band.id
        })
    }

    render(){
        const style = {
          width: '30%',
          margin: '1%',
        }

        const otherStyle = {
            margin: '2%',
            display: 'inline-block'
        }
        return(
            <div style={style}>
                <ListGroupItem>{this.props.band.firstName + ' ' + this.props.band.lastName + ' ' + this.props.band.email + ' ' + this.props.band.phone}</ListGroupItem>
                <Button onClick={ (event) => this.handleClick(event) } style={otherStyle} color="danger">Delete</Button>
            </div>
        )
    }
}

export default Band;
