import SignedOutNavbar from '../src/components/SignedOutNavbar'
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('SignedInNavbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SignedOutNavbar />
    )
  });

it('should render a link to sign in', () => {
  expect(wrapper.find('a.sign-in').text()).toBe('Sign in')
})

it('should render a link to sign up', () => {
  expect(wrapper.find('a.sign-up').text()).toBe('Sign up')
})

it('should render a link to homepage', () => {
  expect(wrapper.find('a.homepage').text()).toBe('Destinations')
})

})
