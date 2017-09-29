/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import DetailContainer from '../containers/DetailContainer';


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
