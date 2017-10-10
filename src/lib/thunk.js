/**
 * Created by chenqu on 2017/10/10.
 */
import fetch from './fetch';

export default (config) => {
    const { url, method = 'get', type, param } = config;
    return async(dispatch) => {
        const responseData = await fetch({
            url,
            param,
            method,
        });
        dispatch({
            type,
            data: responseData,
        });
    };
};
