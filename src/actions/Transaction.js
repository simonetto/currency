import { GET_DETAILS } from '../constants/ActionTypes';

export function getDetails(payload) {
  return { type: GET_DETAILS, payload };
}

export function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}
