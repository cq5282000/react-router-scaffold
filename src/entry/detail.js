/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component, Children, createElement } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, hashHistory } from 'react-router';
import DetailContainer from '../containers/DetailContainer';

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
    <AppContainer>
        <DetailContainer/>
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/DetailContainer.js', () => {
        const NextApp = require('../containers/DetailContainer.js').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
