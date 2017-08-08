/**
 * Created by chenqu on 2017/7/25.
 */
import './style.css';
import Test from './index.js';
import App from './main.js';
import { AppContainer } from 'react-hot-loader';
// import ReactDOM from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('app')
);

// Test.log();
if (module.hot) {
    module.hot.accept('./index.js', function () {
        console.log('accept the update libr');
        Test.log();
    });
    module.hot.accept('./main.js', function () {
        console.log('react hot loader');
        const NextApp = require('./main.js').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}

