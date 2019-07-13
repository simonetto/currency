import { PHONE_LOADED } from '../constants/ActionTypes';
import { PHONE_VERIFIED } from '../constants/ActionTypes';
import { CALLED_VERIFICATION } from '../constants/ActionTypes';
import { SENT_VERIFICATION } from '../constants/ActionTypes';
import { ENABLE_VERIFICATION } from '../constants/ActionTypes';

const initialState = {
    phone: {},
    verificationNumber: ['', '', '', '', '', '']
};

function identification(state = initialState, action) {
    if (action.type === PHONE_LOADED) {
        return Object.assign({}, state, {
            phone: action.payload
        });
    }

    if (action.type === PHONE_VERIFIED) {
        console.log('phone verified!');
        return;
    }

    if (action.type === CALLED_VERIFICATION) {
        console.log('calling user...');
        return;
    }

    if (action.type === SENT_VERIFICATION) {
        console.log('verification number sent');
        return;
    }

    if (action.type === ENABLE_VERIFICATION) {
        return Object.assign({}, state, {
            verificationNumber: action.payload.slice(0)
        });
    }

    return state;
}

export default identification;
