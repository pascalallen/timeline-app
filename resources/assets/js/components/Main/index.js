import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {StyledDiv} from './styles';

export default class Main extends Component {
    render() {
        return (
            <StyledDiv className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Main Component</div>

                            <div className="card-body">
                                I'm the Main component!
                            </div>
                        </div>
                    </div>
                </div>
            </StyledDiv>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
