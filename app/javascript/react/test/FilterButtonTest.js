import FilterButton from '../src/components/FilterButton'
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('FilterButton', () => {
  let wrapper,
  label,
  handleClick;
  beforeEach(() => {
    jasmineEnzyme();
    handleClick = jasmine.createSpy('handleClick spy')
    wrapper = mount(
      <FilterButton
      label = 'Galaxies'
      handleClick = {handleClick}
      />
    )
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  })

  it('should render a button', () => {
    expect(wrapper.find('button').text()).toBe('Galaxies')
  })
})
