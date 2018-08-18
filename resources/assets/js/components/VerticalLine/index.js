import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllTweets, fetchSingleTweet} from '../../actions/twitterActions';
import {StyledDiv} from './styles';
import TwitterEvent from '../TwitterEvent';

const props = (state) => ({
    allTweets: state.twitter.all,
    singleTweet: state.twitter.single,
    fetchedAllTweets: state.twitter.fetchedAll,
    fetchedSingleTweet: state.twitter.fetchedSingle,
    fetchingAllTweets: state.twitter.fetchingAll,
    fetchingSingleTweet: state.twitter.fetchingSingle,
});

class VerticalLine extends React.Component { 
    constructor (props) {
        super(props);
        this.getSingleTweet = this.getSingleTweet.bind(this);
    }

    getSingleTweet(key){
        this.props.fetchSingleTweet(`/api/tweets`, {
            key: key.target.value
        });
    }

    getAllTweets(){
        this.props.fetchAllTweets(`/api/tweets`, {
            screen_name: 'realDonaldTrump'
        });
    }

    componentDidMount() {
        this.getAllTweets();
    }

    render() {
        return (
            <StyledDiv>
                {/* Show all tweets on timeline */}
                {this.props.allTweets && this.props.allTweets.map((tweet) => {
                    return <TwitterEvent key={tweet.id} props={tweet} />
                })}
            </StyledDiv>
        );
    }
}

export default connect(
    props,
    {
      fetchAllTweets,
      fetchSingleTweet,
    }
  )(VerticalLine);