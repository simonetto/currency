import { GET_DETAILS } from "../constants/ActionTypes";

const initialState = {
    transaction: {
        saved : {},
        send : {},
        receive : {},
        receiveDetails : []
    }
};

function details(state = initialState, action) {
    if (action.type === GET_DETAILS) {
        console.log('TODO: code to get details')
    }
    return state;
}

export default details;
