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
    component: ClassifyRouterComponent,
    childRoutes: [
        detailRoute,
        listRoute,
        formRoute,
    ],
    indexRoute: {
        component: Index,
    },
};

export default demandLoadingRoute;

