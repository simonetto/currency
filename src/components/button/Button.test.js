import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Button />);
});

it('renders a button saying next', () => {
    const wrapper = shallow(<Button label="Next"/>);
    const buton = <button className="Button ok " onClick={undefined} disabled={false}>Next</button>;
    expect(wrapper).toContainReact(buton);
});

it('renders a disabled button saying next', () => {
    const wrapper = shallow(<Button disabled={true} label="Next"/>);
    const buton = <button className="Button ok disabled" onClick={undefined} disabled={true}>Next</button>;
    expect(wrapper).toContainReact(buton);
});

it('renders a cancel button saying next', () => {
    const wrapper = shallow(<Button disabled={false} type="cancel" label="Next"/>);
    const buton = <button className="Button cancel " onClick={undefined} disabled={false}>Next</button>;
    expect(wrapper).toContainReact(buton);
});
