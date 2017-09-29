/**
 * @since 2017-04-04 18:38
 * @author chenyiqin
 */

import React, { Children, createElement } from 'react';
import { Router, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
// import { render } from 'react-dom';

const SELECTOR = 'main';

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

export default (routes) => {
    return render(
        <AppContainer>
            <Router history={hashHistory} routes={routes}/>
        </AppContainer>
    );
};

