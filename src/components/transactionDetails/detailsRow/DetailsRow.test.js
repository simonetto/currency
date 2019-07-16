import React from 'react';
import ReactDOM from 'react-dom';
import DetailsRow from './DetailsRow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const detail = {
        isTotal : false
    };

    shallow(<DetailsRow  detail={detail} />);
});

it('render £1.00', () => {
    const detail = {
        currency : 'gbp',
        value : '1'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} />);
    const span = <span className="bigger-text ">£1.00</span>;
    expect(wrapper).toContainReact(span);
});

it('render £1.00 with 1.0', () => {
    const detail = {
        currency : 'eur',
        value : '1.0'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} />);
    const span = <span className="bigger-text ">€1.00</span>;
    expect(wrapper).toContainReact(span);
});

it('render £1.00 with 1.001987987', () => {
    const detail = {
        currency : 'eur',
        value : '1.001987987'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} />);
    const span = <span className="bigger-text ">€1.00</span>;
    expect(wrapper).toContainReact(span);
});

it('render £1234.00 with £1234.001987987', () => {
    const detail = {
        currency : 'eur',
        value : '1234.001987987'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} />);
    const span = <span className="bigger-text ">€1234.00</span>;
    expect(wrapper).toContainReact(span);
});

it('render bold text', () => {
    const detail = {
        isTotal : true,
        currency : 'gbp',
        value : '1'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} />);
    const span = <span className="bigger-text bold-text">£1.00</span>;
    expect(wrapper).toContainReact(span);
});

it('render a special component for the first row', () => {
    const detail = {
        currency : 'gbp',
        value : '1'
    };

    const wrapper = shallow(<DetailsRow  detail={detail} isFirst={true}/>);
    expect(wrapper.find('div').hasClass('first-row')).toEqual(true);
});
