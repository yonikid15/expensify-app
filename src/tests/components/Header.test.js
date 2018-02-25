import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
    const onStartLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={onStartLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(onStartLogoutSpy).toHaveBeenCalled();
});