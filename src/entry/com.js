/**
 * Created by chenqu on 2017/9/27.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TestContainer from '../containers/TestContainer';

render(
    <AppContainer>
        <TestContainer/>
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/TestContainer', () => {
        const NextApp = require('../containers/TestContainer').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
