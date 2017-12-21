import { renderer } from './index.js';

export default function createStore(reducer) {

    let state;

    function dispatch(action) {
        state = reducer(state, action);

        console.log('createStore', state);
        renderer.render();
    }

    function getState() {
        return state;
    }

    return {
        dispatch,
        getState
    }
}
