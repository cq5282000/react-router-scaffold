/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const testRoute = {
    path: '/test',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/TestContainer').default);
        });
    },
};

export default testRoute;
