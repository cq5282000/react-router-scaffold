/**
 * Created by chenqu on 2017/9/29.
 */
// import FormContainer from '../src/containers/FormContainer';

const formRoute = {
    path: '/form',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../src/containers/FormContainer').default);
        });
    },
    //component: FormContainer,
};

export default formRoute;
