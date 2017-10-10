/**
 * Created by chenqu on 2017/10/10.
 */
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();
const store = createStore(combineReducers(reducer), compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
));

if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextReduceers = require('../reducers').default;
    });
}

export default store;
