import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAll, fetchSingle} from '../../actions/twitterActions';
import {StyledDiv} from './styles';

const props = (state) => ({
    single: state.twitter.single,
    all: state.twitter.all,
    fetchedAll: state.twitter.fetchedAll,
    fetchedSingle: state.twitter.fetchedSingle,
    fetchingAll: state.twitter.fetchingAll,
    fetchingSingle: state.twitter.fetchingSingle,
});

class VerticalLine extends React.Component { 
    constructor (props) {
        super(props);
        this.getSingle = this.getSingle.bind(this);
    }

    getSingle(key){
        this.props.fetchSingle(`/api/tweets`, {
            key: key.target.value
        });
    }

    getAll(){
        this.props.fetchAll(`/api/tweets`, {
            screen_name: 'realDonaldTrump'
        });
    }

    componentDidMount() {
        this.getAll();
    }

    render() {
        return (
            <StyledDiv>
                {this.props.all && this.props.all.map((tweet) => {
                    return <p key={tweet.id}>{tweet.text}</p>
                })}
            </StyledDiv>
        );
    }
}

export default connect(
    props,
    {
      fetchAll,
      fetchSingle,
    }
  )(VerticalLine);