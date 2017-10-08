/**
 * Created by chenqu on 2017/9/28.
 */
import Index from '../src/components/Index';
// import ClassifyRouterComponent from '../src/components/ClassifyRouterComponent';
import MenuComponent from '../src/components/MenuComponent/MenuComponent';
import detailRoute from './detailRoute';
import formRoute from './formRoute';
import listRoute from './listRoute';

const demandLoadingRoute = {
    path: '/',
    component: MenuComponent,
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

