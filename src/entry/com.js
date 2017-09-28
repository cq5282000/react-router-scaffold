/**
 * Created by chenqu on 2017/9/27.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import TestContainer from '../containers/TestContainer';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';

render(
    <Router history={hashHistory} >
        <Route path="/" component={TestContainer}>
            <Route path="com1" component={Component1}/>
            <Route path="com2" component={Component2}/>
            <Route path="com3" component={Component3}/>
        </Route>
    </Router>,
    document.getElementById('app'),
);
