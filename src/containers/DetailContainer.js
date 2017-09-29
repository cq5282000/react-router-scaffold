/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';
import demandLoadingRoute from '../../router/demandLoadingRoute';

export default class DetailContainer extends Component {
    render() {
        return (
            <Router history={hashHistory} routes={demandLoadingRoute}/>
        );
    }
}
