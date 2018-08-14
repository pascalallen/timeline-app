import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import VerticalLine from '../VerticalLine';
import Subject from '../Subject';
import {SubjectLeft, SubjectRight} from './styles';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SubjectLeft />
                <VerticalLine />
                <SubjectRight />
            </div>
        );
    }
}

export default App;