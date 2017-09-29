/**
 * Created by chenqu on 2017/9/28.
 */
import RouterComponent from '../src/components/RouteComponent';
import Home from '../src/components/Home';
import Component1 from '../src/components/Component1';
import Component2 from '../src/components/Component2';
import Component3 from '../src/components/Component3';
import Message from '../src/components/Message';

const router = {
    path: '/',
    component: RouterComponent,
    indexRoute: {
        component: Home,
    },
    childRoutes: [
        {
            path: 'com1',
            component: Component1,
            childRoutes: [
                {
                    path: 'message/:id',
                    component: Message,
                },
            ],
        },
        {
            path: 'com2',
            component: Component2,
        },
        {
            path: 'com3',
            component: Component3,
        },
    ],
};

export default router;
