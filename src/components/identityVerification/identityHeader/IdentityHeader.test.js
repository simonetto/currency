import React from 'react';
import ReactDOM from 'react-dom';
import IdentityHeader from './IdentityHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdentityHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
