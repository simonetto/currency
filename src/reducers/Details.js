import { DETAILS_LOADED } from '../constants/ActionTypes';

const initialState = {
    transaction: {
        saved : {},
        send : {},
        receive : {},
        receiveDetails : []
    }
};

function details(state = initialState, action) {
    if (action.type === DETAILS_LOADED) {
        return Object.assign({}, state, {
            transaction: action.payload
        });
    }

    return state;
}

export default details;
