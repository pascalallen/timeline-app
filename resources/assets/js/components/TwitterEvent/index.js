import React, { Component } from 'react';
import {connect} from 'react-redux';
import {StyledDiv, StyledImg, Test} from './styles';

const props = (state) => ({
    text: state.text,
});

class TwitterEvent extends React.Component { 
    constructor (props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div>
                <StyledImg src="/images/twitter-icon.png" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
                {
                this.state.isHovering &&
                <div>
                    {this.props.props.text}
                </div>
                }
            </div>
        );
    }
}

export default connect(
    props,
    {
        // 
    }
  )(TwitterEvent);