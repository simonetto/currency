import React from 'react';
import ReactDOM from 'react-dom';
import WizardButton from './WizardButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WizardButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
