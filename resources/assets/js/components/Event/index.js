import React, { Component } from 'react';
import {connect} from 'react-redux';
import {StyledDiv} from './styles';

const props = (state) => ({
    text: state.text,
});

class Event extends React.Component { 
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
    {console.log(this.props)}
            </div>
        );
    }
}

export default connect(
    props,
    {
        // 
    }
  )(Event);