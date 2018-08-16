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
                <img src="/images/twitter-icon.png" />
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