import React from 'react';
import { mount } from 'enzyme';
import { Tab } from 'react-bootstrap';
import About from './About';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {
  it('renders without error', () => {
    mount(<About />);
  });

  it('displays the first tab content by default', () => {
    const wrapper = mount(<About />);
    const tabPane = wrapper.find(Tab.Pane).first();
    expect(tabPane.prop('eventKey')).toBe('first');
    expect(tabPane.find('img')).toHaveLength(1);
    expect(tabPane.find('p')).toHaveLength(1);
  });

  it('switches to the second tab when clicked', () => {
    const wrapper = mount(<About />);
    const secondTabLink = wrapper.find('Nav.Link').at(1);
    secondTabLink.simulate('click');
    const tabPane = wrapper.find(Tab.Pane).at(1);
    expect(tabPane.prop('eventKey')).toBe('second');
    expect(tabPane.find('img')).toHaveLength(1);
    expect(tabPane.find('p')).toHaveLength(1);
  });

  // Add more test cases for other tabs and scenarios...

});
