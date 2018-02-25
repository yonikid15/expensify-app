import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render the correct snapshot', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const onStartLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={onStartLoginSpy}/>);
    wrapper.find('button').simulate('click');
    expect(onStartLoginSpy).toHaveBeenCalled();
});