import React from 'react';
import ReactDOM from 'react-dom';
import IdentityFooter from './IdentityFooter';
import { Provider } from "react-redux";
import store from "../../../store";
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Button from '../../button';

it('renders without crashing', () => {
    shallow(<Provider store={store}><IdentityFooter /></Provider>);
});
