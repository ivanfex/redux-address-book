import React, { Component } from 'react';
import Band from './Band';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Bands extends Component {
    render(){
        const bands = this.props.store.getState().bands.map((band, index) => {
            return <Band key={index} band={band} store={this.props.store} />
        });
        return(
            <ListGroup>
                {bands}
            </ListGroup>
        );
    }
};

export default Bands;
