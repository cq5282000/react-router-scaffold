/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ClassifyRouterComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/list">list</Link></li>
                    <li><Link to="/detail">detail</Link></li>
                    <li><Link to="/form">form</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
