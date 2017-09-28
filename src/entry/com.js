/**
 * Created by chenqu on 2017/9/27.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, hashHistory } from 'react-router';
import TestContainer from '../containers/TestContainer';


render(
    <AppContainer>
        <TestContainer/>
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/TestContainer.js', () => {
        const NextApp = require('../containers/TestContainer.js').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
