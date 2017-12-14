/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    fetchData: () => thunk({
        url: '/list',
        param: {},
        type: constant.FETCH_DATA,
    }),
};
