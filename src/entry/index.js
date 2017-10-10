/**
 * Created by chenqu on 2017/9/29.
 */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import render from '../lib/createRender';
import RouterContainer from '../containers/base/RouterContainer';

render(RouterContainer);

if (module.hot) {
    module.hot.accept('../containers/base/RouterContainer.js', () => {
        const NextApp = require('../containers/base/RouterContainer.js').default;
        render(NextApp);
    });
}
