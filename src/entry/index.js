/**
 * Created by chenqu on 2017/9/29.
 */
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import render from '../lib/createRender';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './configureStore';
import { render } from 'react-dom';
// import React from 'react';
import React, { Component, Children, createElement } from 'react';

// render(RouterContainer);

import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Router, hashHistory } from 'react-router';
import reducer from '../reducers';
import RouterContainer from '../containers/base/RouterContainer';

const logger = createLogger();
const store = createStore(combineReducers(reducer), compose(
    applyMiddleware(logger, thunk),
    window.devToolExtension ? window.devToolExtension() : (f) => f,
));

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

render(
    <Provider store={store} >
        <AppContainer>
            <RouterContainer />
        </AppContainer>
    </Provider>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/base/RouterContainer.js', () => {
        const NextApp = require('../containers/base/RouterContainer.js').default;
        // render(RouterContainer);
        render(
            <Provider store={store} >
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>,
            document.getElementById('app'),
        );
    });
}
if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default;
        store.replaceReducer(combineReducers(nextReducer));
    });
}
