/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    show: true,
};

export default createReducer(defaultState, {
    [constant.SHOW_OPERATION]: (state, action) => {
        return {
            ...state,
            show: true,
        };
    },
    [constant.HIDE_OPERATION]: (state, action) => {
        return {
            ...state,
            show: true,
        };
    },
});
