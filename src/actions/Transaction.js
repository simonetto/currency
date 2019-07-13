import { GET_DETAILS } from '../constants/ActionTypes';
import { DETAILS_LOADED } from '../constants/ActionTypes';

export function getDetails(payload) {
  return { type: GET_DETAILS, payload };
}

export function getData() {
  return fetch('https://my-json-server.typicode.com/simonetto/currency/transaction')
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}
