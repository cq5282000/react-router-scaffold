/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const listRoute = {
    path: '/list',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/ListContainer').default);
        });
    },
};

export default listRoute;
