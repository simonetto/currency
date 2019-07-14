import React from 'react';
import ReactDOM from 'react-dom';
import RightPanel from './RightPanel';
import { Provider } from "react-redux";
import store from "../../store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><RightPanel /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
