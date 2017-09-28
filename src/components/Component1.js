/**
 * Created by chenqu on 2017/9/27.
 */
import React, { Component } from 'react';

export default class Component1 extends Component {
    render() {
        return (
            <div>
                <h1>Component11111</h1>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}
