import App from '../src/App';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import ReviewTile from '../src/components/ReviewTile'

describe('ReviewTile', () => {
  let wrapper,
    body,
    rating,
    votes;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        body="test review body"
        rating="4"
        votes="5"
      />
    )
  });

  it('should have a p tag with the review body', () => {
    expect(wrapper.find('p.review-body').text()).toBe("test review body")
  })

  it('should have a p tag with the review rating', () => {
    expect(wrapper.find('p.review-rating').text()).toBe("Rating: 4")
  })

  it('should have a p tag with the review votes', () => {
    expect(wrapper.find('p.review-votes').text()).toBe("Votes: 5")
  })
})
