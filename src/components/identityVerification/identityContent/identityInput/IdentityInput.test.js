import React from 'react';
import ReactDOM from 'react-dom';
import IdentityInput from './IdentityInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdentityInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
