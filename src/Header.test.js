import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct initial language', () => {
    expect(wrapper.find('a[children="ua"]').prop('style').color).toBe('green');
    expect(wrapper.find('a[children="en"]').prop('style').color).toBe('red');
  });

  it('changes the language to Ukrainian on clicking "ua"', () => {
    const uaLink = wrapper.find('a[children="ua"]');
    uaLink.simulate('click');
    expect(wrapper.find('a[children="ua"]').prop('style').color).toBe('red');
    expect(wrapper.find('a[children="en"]').prop('style').color).toBe('green');
  });

  it('changes the language to English on clicking "en"', () => {
    const enLink = wrapper.find('a[children="en"]');
    enLink.simulate('click');
    expect(wrapper.find('a[children="ua"]').prop('style').color).toBe('green');
    expect(wrapper.find('a[children="en"]').prop('style').color).toBe('red');
  });

  it('opens the login modal on clicking "Login" button', () => {
    const loginButton = wrapper.find('Button[children="Login"]');
    loginButton.simulate('click');
    expect(wrapper.find('Modal').prop('show')).toBe(true);
  });

  it('closes the login modal on clicking the close button', () => {
    wrapper.setState({ show: true });
    const modalCloseButton = wrapper.find('Modal').prop('onHide');
    modalCloseButton();
    expect(wrapper.find('Modal').prop('show')).toBe(false);
  });

  it('updates the email state when email input value changes', () => {
    const emailInput = wrapper.find('FormControl[type="email"]');
    const event = { target: { value: 'test@example.com' } };
    emailInput.simulate('change', event);
    expect(wrapper.state('email')).toBe('test@example.com');
  });

  it('updates the password state when password input value changes', () => {
    const passwordInput = wrapper.find('FormControl[type="password"]');
    const event = { target: { value: 'test123' } };
    passwordInput.simulate('change', event);
    expect(wrapper.state('password')).toBe('test123');
  });

  it('sets the formValid state to true when email and password are valid', () => {
    wrapper.setState({ email: 'test@example.com', password: 'test123' });
    expect(wrapper.state('formValid')).toBe(true);
  });

  it('sets the formValid state to false when email is invalid', () => {
    wrapper.setState({ email: 'invalid', password: 'test123' });
    expect(wrapper.state('formValid')).toBe(false);
  });

  it('sets the formValid state to false when password is invalid', () => {
    wrapper.setState({ email: 'test@example.com', password: '12' });
    expect(wrapper.state('formValid')).toBe(false);
  });

  

});
