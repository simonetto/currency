import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AppHeader />);
});

it('displays the logo', () => {
    const wrapper = shallow(<AppHeader />);
    const icon = <img src="CF_logo_RGB_NEG.svg" className="App-logo" alt="logo" />;
    expect(wrapper).toContainReact(icon);
});
