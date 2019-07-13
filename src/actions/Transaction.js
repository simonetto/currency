import { DETAILS_LOADED } from '../constants/ActionTypes';
import { TRANSACTION_DETAILS } from '../constants/Endpoints';

export function getData() {
  return function(dispatch) {
    return fetch(TRANSACTION_DETAILS)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DETAILS_LOADED, payload: json });
      });
  };
}
