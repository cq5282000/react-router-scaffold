/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import FormContainer from '../containers/FormContainer';


render(
    <AppContainer>
        <FormContainer/>
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('../containers/FormContainer.js', () => {
        const NextApp = require('../containers/FormContainer.js').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
