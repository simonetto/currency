import { PHONE_LOADED } from '../constants/ActionTypes';
import { PHONE_VERIFIED } from '../constants/ActionTypes';
import { CALLED_VERIFICATION } from '../constants/ActionTypes';
import { SENT_VERIFICATION } from '../constants/ActionTypes';
import { ENABLE_VERIFICATION } from '../constants/ActionTypes';
import { PHONE_NUMBER } from '../constants/Endpoints';
import { VERIFY_NUMBER } from '../constants/Endpoints';
import { SEND_VERIFICATION_NUMBER } from '../constants/Endpoints';
import { CALL_VERIFICATION_NUMBER } from '../constants/Endpoints';
import Utils from '../utils';

export function getData() {
    return function(dispatch) {
        return fetch(PHONE_NUMBER)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: PHONE_LOADED, payload: json });
        });
    };
}

export function verifyNumber(number) {
    return function(dispatch) {
        return Utils.postData(VERIFY_NUMBER, number)
        .then(() => dispatch({ type: PHONE_VERIFIED, payload: null }), error => console.log(error));
    };
}

export function sendVerificationNumber() {
    return function(dispatch) {
        return Utils.postData(SEND_VERIFICATION_NUMBER)
        .then(() => dispatch({ type: SENT_VERIFICATION, payload: null }), error => console.log(error));
    };
}

export function callVerificationNumber() {
    return function(dispatch) {
        return Utils.postData(CALL_VERIFICATION_NUMBER)
        .then(() => dispatch({ type: CALLED_VERIFICATION, payload: null }), error => console.log(error));
    };
}

export function enableVerification(payload) {
    return { type: ENABLE_VERIFICATION, payload }
}
