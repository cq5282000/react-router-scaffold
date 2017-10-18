/**
 * Created by chenqu on 2017/9/29.
 */
// import DetailContainer from '../src/containers/DetailContainer';

const detailRoute = {
    path: '/detail',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../src/containers/DetailContainer').default);
        });
    },
    // component: DetailContainer,
};

export default detailRoute;
