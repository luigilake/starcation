import SignedInNavbar from '../src/components/SignedInNavbar'
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('SignedInNavbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SignedInNavbar />
    )
  });

it('should render a link to sign out', () => {
  expect(wrapper.find('a.sign-out').text()).toBe('Sign out')
})

it('should render a link to edit profile', () => {
  expect(wrapper.find('a.user-profile').text()).toBe('User Profile')
})

it('should render a link to homepage', () => {
  expect(wrapper.find('a.homepage').text()).toBe('Destinations')
})

})
