/**
 * Created by chenqu on 2017/7/25.
 */
import { AppContainer } from 'react-hot-loader';
// import ReactDOM from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/main';

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('app'),
);

// Test.log();
if (module.hot) {
    module.hot.accept('../containers/main.js', () => {
        console.log('react hot loader');
        const NextApp = require('../containers/main.js').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}

