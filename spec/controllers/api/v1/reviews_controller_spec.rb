require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  # let!(:user) {User.create(first_name: "first", last_name: "last", username: "username", email: "123@gmail.com", password: "1234567", password_confirmation: "1234567")}
  # let!(:planet1) {Celestial.create(name: "Planet1", distance: 1, celestial_type: "planet", size: 2, user: user)}
  # let!(:review1) {Review.create(body: "test review body", votes: 4, rating: 5, user: user, celestial: planet1)}


  # BREAK MEEEEEEE
  # TODO: Finish this test!
  # Prevent infinite upvote/downvote
  # Optimize upvote/downvote so it doesn't rerender whole page

  describe "Get#create" do
    before do
      get :create
    end

    it "should return a json" do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end
  end
end