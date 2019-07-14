import React from 'react';
import ReactDOM from 'react-dom';
import TransactionDetails from './TransactionDetails';
import { Provider } from "react-redux";
import store from "../../store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><TransactionDetails /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
