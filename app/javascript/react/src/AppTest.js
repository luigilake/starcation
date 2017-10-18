import App from './App';
import IndexPage from './components/IndexPage';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import Celestial from './components/Celestial';

describe('Celestial', () => {
  let wrapper,
  name,
  type;

  beforeEach(() => {
    wrapper = mount(
      <Celestial
      name='Andromeda'
      type='galaxy' />
    )
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1').text()).toBe('Andromeda')
  })

  it('should render an p tag', () => {
    expect(wrapper.find('p').text()).toBe('galaxy')
  })

  it('should render an h5 tag', () => {
    expect(wrapper.find('h5').text()).toBe('Rating: haha')
  })
})
