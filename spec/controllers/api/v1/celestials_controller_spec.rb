require "rails_helper"

RSpec.describe Api::V1::CelestialsController, type: :controller do
  let!(:user) {User.create(first_name: "first", last_name: "last", username: "username", email: "123@gmail.com", password: "1234567", password_confirmation: "1234567")}
  let!(:planet1) {Celestial.create(name: "Planet1", distance: 1, celestial_type: "planet", size: 2, user: user)}
  let!(:review1) {Review.create(body: "test review body", votes: 4, rating: 5, user: user, celestial: planet1)}

  describe "Get#index" do
    before do
      get :index
    end

    it "should return a json" do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it "should return a json with a name, distance, celestial_type, and size" do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]["name"]).to eq "Planet1"
      expect(returned_json[0]["distance"]).to eq 1
      expect(returned_json[0]["celestial_type"]).to eq "planet"
      expect(returned_json[0]["size"]).to eq 2
    end
  end

  describe "Get#show" do
    before do
      get :show, params: { id: planet1.id }
    end

    it "should return a json" do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it "should return a json with a name, distance, celestial_type, and size" do
      returned_json = JSON.parse(response.body)
      expect(returned_json["celestial"]["name"]).to eq "Planet1"
      expect(returned_json["celestial"]["distance"]).to eq 1
      expect(returned_json["celestial"]["celestial_type"]).to eq "planet"
      expect(returned_json["celestial"]["size"]).to eq 2
      expect(returned_json["reviews"][0]["body"]).to eq "test review body"
      expect(returned_json["reviews"][0]["rating"]).to eq 5
      expect(returned_json["reviews"][0]["votes"]).to eq 4
    end
  end
end
