/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ListContainer from '../containers/ListContainer';

render(
    <AppContainer>
        <ListContainer/>
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/ListContainer.js', () => {
        const NextApp = require('../containers/ListContainer.js').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
