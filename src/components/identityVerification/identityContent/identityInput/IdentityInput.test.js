import React from 'react';
import ReactDOM from 'react-dom';
import IdentityInput from './IdentityInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<IdentityInput />);
});

const shouldCallOnInput = value => {
    const onInputMock = jest.fn();
    const event = {
        preventDefault() {},
        target: { value }
    };
    const component = shallow(<IdentityInput onInput={onInputMock} />);
    component.find('input').simulate('change', event);
    expect(onInputMock).toBeCalledWith(value);
};

const shouldNotCallOnInput = value => {
    const onInputMock = jest.fn();
    const event = {
        preventDefault() {},
        target: { value }
    };
    const component = shallow(<IdentityInput onInput={onInputMock} />);
    component.find('input').simulate('change', event);
    expect(onInputMock).not.toHaveBeenCalled();
};

it('should call onInput with valid inputs', () => {
    shouldCallOnInput('');
    shouldCallOnInput('1');
    shouldCallOnInput('2');
    shouldCallOnInput('3');
    shouldCallOnInput('4');
    shouldCallOnInput('5');
    shouldCallOnInput('6');
    shouldCallOnInput('7');
    shouldCallOnInput('8');
    shouldCallOnInput('9');
    shouldCallOnInput('0');
});

it('should not call onInput with invalid inputs', () => {
    shouldNotCallOnInput('1.');
    shouldNotCallOnInput('1s');
    shouldNotCallOnInput('s');
    shouldNotCallOnInput('1/');
    shouldNotCallOnInput('$');
    shouldNotCallOnInput('.0');
    shouldNotCallOnInput(' ');
});
