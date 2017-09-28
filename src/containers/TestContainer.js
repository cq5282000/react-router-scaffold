/**
 * Created by chenqu on 2017/8/7.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TestContainer extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                { this.props.children }
            </div>
        );
    }
}

