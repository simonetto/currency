import React from 'react';
import ReactDOM from 'react-dom';
import IdentityFooter from './IdentityFooter';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import store from "../../../store";
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

it('renders without crashing', () => {
    shallow(<Provider store={store}><IdentityFooter /></Provider>);
});

const testVerificationButton = (number, shouldBeDisabled) => {
    const storeStateMock = {
        identification : {
            verificationNumber : number
        }
    };

    const store = mockStore(storeStateMock);
    const wrapper = mount(<Provider store={store}><IdentityFooter /></Provider>);
    expect(wrapper.find('button').first().hasClass('disabled')).toEqual(shouldBeDisabled);
}

it('verification button should be disabled', () => {
    testVerificationButton([], true);
    testVerificationButton(['','','','','',''], true);
    testVerificationButton(['1','','','','',''], true);
    testVerificationButton(['1','2','','','',''], true);
    testVerificationButton(['1','2','3','','',''], true);
    testVerificationButton(['1','2','3','4','',''], true);
    testVerificationButton(['1','2','3','4','5',''], true);
});

it('verification button should be enabled', () => {
    testVerificationButton(['1','2','3','4','5','6'], false);
});
