import App from '../src/App';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import UserTile from '../src/components/UserTile'

describe('UserTile', () => {
  let wrapper,
    username,
    first_name,
    last_name,
    email,
    handleClick;
    beforeEach(() => {
      jasmineEnzyme();
      handleClick = jasmine.createSpy('handleClick spy')
      wrapper = mount(
        <UserTile
          username='testUser'
          first_name='test'
          last_name='user'
          email='test@gmail.com'
          handleClick={handleClick}
          />
      )
    });

    it('should invoke the onClick function from props when clicked', () => {
      wrapper.find('button').simulate('click');
      expect(handleClick).toHaveBeenCalled();
    })

    it('should have an image tag with the user image of each user', () => {
      expect(wrapper.find('img'))
    })

    it('should have an p tag with the username of each user', () => {
      expect(wrapper.find('p.user-name').text()).toBe("testUser")
    })

    it('should have a p tag with the full name of each user', () => {
      expect(wrapper.find('p.full-name').text()).toBe("test user")
    })

    it('should have a p tag with the email of each user', () => {
      expect(wrapper.find('p.email').text()).toBe("test@gmail.com")
    })

})
