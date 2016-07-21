import { handleActions } from 'redux-actions';

const test = handleActions({
    ['increant'](state) {
        state.counter++;
        return { ...state};
            },
['cal'](state) {

    return { ...state };
}
    },{
    counter: 1
});

export default test;
