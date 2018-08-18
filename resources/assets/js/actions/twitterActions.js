import axios from "axios/index";

export function fetchSingleTweet(endpoint, data){
  return function(dispatch) {
    dispatch({type: "FETCH_SINGLE"});
    axios.post(endpoint, {
      key: data.key
    })
    .then((response) => {
      dispatch({
        type: "FETCH_SINGLE_FULFILLED",
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch({type: "FETCH_SINGLE_REJECTED", payload: err})
    })
  }
}

export function fetchAllTweets(endpoint, optionalParams = {}) {
  return function(dispatch) {
    dispatch({type: "FETCH_ALL"});
    axios.get(endpoint, {
      params: optionalParams
    })
    .then((response) => {
      dispatch({
        type: "FETCH_ALL_FULFILLED",
        payload: response
      })
    })
    .catch((err) => {
      dispatch({type: "FETCH_ALL_REJECTED", payload: err})
    })
  }
}