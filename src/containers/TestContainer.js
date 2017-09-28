/**
 * Created by chenqu on 2017/8/7.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import routes from '../../router/Router';

export default class TestContainer extends Component {
    render() {
        return (
            <Router history={hashHistory} routes={routes}/>
        );
    }
}

