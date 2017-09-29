/**
 * Created by chenqu on 2017/9/28.
 */
import Index from '../src/components/Index';
import ClassifyRouterComponent from '../src/components/ClassifyRouterComponent';
import detailRoute from './detailRoute';
import formRoute from './formRoute';
import listRoute from './listRoute';

const demandLoadingRoute = {
    path: '/',
    getChildRoutes(partialNextState, callback) {
        require.ensure([], () => {
            callback(null, [
                detailRoute,
                listRoute,
                formRoute,
            ]);
        });
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], () => {
            callback(null, {
                component: Index,
            });
        });
    },
    getComponents(nextState, callback) {
        require.ensure([], () => {
            callback(null, ClassifyRouterComponent);
        });
    },
};

export default demandLoadingRoute;

