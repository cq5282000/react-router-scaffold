/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';

export default {
    showOp: () => ({
        type: constant.SHOW_OPERATION,
    }),
    hideOp: () => ({
        type: constant.HIDE_OPERATION,
    }),
};
