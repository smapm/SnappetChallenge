import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import '../setupTests';
describe('Layout Test Suite', () => {

  it('it should render Layout', () => {
    const component = shallow(<Layout />);
    const wrapper = component.find('#layout-wrapper');
    expect(wrapper.length).toBe(1);
  });

});
