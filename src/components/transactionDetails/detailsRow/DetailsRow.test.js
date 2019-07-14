import React from 'react';
import ReactDOM from 'react-dom';
import DetailsRow from './DetailsRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const detail = {
      isTotal : false
  };

  ReactDOM.render(<DetailsRow  detail={detail} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
