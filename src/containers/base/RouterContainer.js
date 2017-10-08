/**
 * Created by chenqu on 2017/9/30.
 */
import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';
// import {syncHistoryWithStore,} from 'react-router-redux'
import demandLoadingRoute from '../../../router/demandLoadingRoute';

export default class RouterContainer extends Component {
    render() {
        return (
            <Router history={hashHistory} routes={demandLoadingRoute} />
        );
    }
}
