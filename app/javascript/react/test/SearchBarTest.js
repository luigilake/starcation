import SearchBar from '../src/components/SearchBar';
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('SearchBar', () => {
  let wrapper,
  value,
  handleChange;
  beforeEach(() => {
    jasmineEnzyme();
    handleChange = jasmine.createSpy('handleChange spy')
    wrapper = mount(
      <SearchBar
        value = ''
        handleSearchChange = {handleChange}
      />
    )
  });

  it('should render a searchbar', () => {
    expect(wrapper.find('input').text()).toBe('')
  })

  it('should invoke the onChange function', () => {
    wrapper.find('#search-field').simulate('change', {target: {value: value}});
    expect(handleChange).toHaveBeenCalled();
  })
})
