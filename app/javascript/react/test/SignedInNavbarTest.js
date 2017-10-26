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
  expect(wrapper.find('button')).toBePresent();
})
})
