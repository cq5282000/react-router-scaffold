/**
 * Created by chenqu on 2017/9/28.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RouterComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/com1">com1</Link></li>
                    <li><Link to="/com2">com2</Link></li>
                    <li><Link to="/com3">com3</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
