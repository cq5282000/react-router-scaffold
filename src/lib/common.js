/**
 * Created by chenqu on 2017/9/12.
 */
export const createReducer = (defaultState, handlers) => {
    console.log('12313213');
    return (state = defaultState, action) => {
        return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
    };
};
