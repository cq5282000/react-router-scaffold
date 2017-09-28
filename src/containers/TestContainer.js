/**
 * Created by chenqu on 2017/8/7.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';

export default class TestContainer extends Component {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/">
                    <Route path="com1" component={Component1}/>
                    <Route path="com2" component={Component2}/>
                    <Route path="com3" component={Component3}/>
                </Route>
            </Router>
        );
    }
}

