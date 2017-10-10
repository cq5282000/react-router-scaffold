/**
 * Created by chenqu on 2017/10/10.
 */
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, hashHistory } from 'react-router';
import React, { Component, Children, createElement } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';

// hack around https://github.com/gaearon/react-hot-boilerplate/pull/61#issuecomment-211504531
Router.prototype.componentWillReceiveProps = (nextProps) => {
    const components = [];

    const grabComponents = (element) => {
        // This only works for JSX routes, adjust accordingly for plain JS config
        if (element.props && element.props.component) {
            components.push(element.props.component);
        }
        if (element.props && element.props.children) {
            Children.forEach(element.props.children, grabComponents);
        }
    };

    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(createElement); // force patching
};

export default (Entry) => {
    return render(
        <Provider store={store} >
            <AppContainer>
                <Entry />
            </AppContainer>
        </Provider>,
        document.getElementById('app'),
    );
};
