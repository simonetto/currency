import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyBox from './CurrencyBox';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<CurrencyBox />);
});

it('renders a box with the pound image', () => {
    const wrapper = shallow(<CurrencyBox currency="gbp" amount="1232.534"/>);
    const icon = <img src="gbp.png" className="currency-logo" alt="gbp" />;
    expect(wrapper).toContainReact(icon);
});

it('renders a box with the euro image', () => {
    const wrapper = shallow(<CurrencyBox currency="eur" amount="1232.534"/>);
    const icon = <img src="eur.png" className="currency-logo" alt="eur" />;
    expect(wrapper).toContainReact(icon);
});

it('render the amount with commas and two decimals in euro', () => {
    const wrapper = shallow(<CurrencyBox currency="eur" amount="1232.534"/>);
    const amount = <div className="currency"><span className="amount">€ 1,232</span><span>.53</span></div>;
    expect(wrapper).toContainReact(amount);
});

it('render the amount with commas and two decimals in pounds', () => {
    const wrapper = shallow(<CurrencyBox currency="gbp" amount="12322345.539"/>);
    const amount = <div className="currency"><span className="amount">£ 12,322,345</span><span>.54</span></div>;
    expect(wrapper).toContainReact(amount);
});
