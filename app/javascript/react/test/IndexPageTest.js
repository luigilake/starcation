import App from '../src/App';
import IndexPage from '../src/containers/IndexPage';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import CelestialTile from '../src/components/CelestialTile';

describe('Celestial', () => {
  let wrapper,
  name,
  type;

  beforeEach(() => {
    wrapper = mount(
      <CelestialTile
        name = 'Andromeda'
        type = 'galaxy'
        photo = 'example_photo_url.com'
      />
    )
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1').text()).toBe('Andromeda')
  })

  it('should render an p tag', () => {
    expect(wrapper.find('p.celestial-type').text()).toBe('Celestial Type: galaxy')
  })

  it('should render a p tag', () => {
    expect(wrapper.find('p.rating').text()).toBe('Rating: haha')
  })
})
