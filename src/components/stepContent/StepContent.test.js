import React from 'react';
import ReactDOM from 'react-dom';
import StepContent from './StepContent';
import { Provider } from "react-redux";
import store from "../../store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><StepContent /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
