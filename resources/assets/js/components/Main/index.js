import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VerticalLine from '../VerticalLine';
import Subject from '../Subject';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <Subject />
                <VerticalLine />
                <Subject />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
