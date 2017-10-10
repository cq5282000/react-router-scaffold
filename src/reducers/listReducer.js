/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    data: {},
};

export default createReducer(defaultState, {
    [constant.FETCH_DATA]: (state, action) => {
        return {
            ...state,
            data: action.data,
        };
    },
});
