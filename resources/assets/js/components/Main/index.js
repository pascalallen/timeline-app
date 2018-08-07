import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VerticalLine from '../VerticalLine';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <VerticalLine />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
