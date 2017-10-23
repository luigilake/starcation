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

    it "should return a json with celestial details - name, distance, celestial_type, and size" do
      returned_json = JSON.parse(response.body)["celestial"]
      expect(returned_json["name"]).to eq "Planet1"
      expect(returned_json["distance"]).to eq 1
      expect(returned_json["celestial_type"]).to eq "planet"
      expect(returned_json["size"]).to eq 2
    end

    it "should return a json of a celestial that has list of reviews" do
      returned_json = JSON.parse(response.body)["reviews"][0]
      expect(returned_json["body"]).to eq "test review body"
      expect(returned_json["rating"]).to eq 5
      expect(returned_json["votes"]).to eq 4
    end

    it "should return a json of a review that has details about its creator" do
      returned_json = JSON.parse(response.body)["reviews"][0]
      expect(returned_json["user"]["first_name"]).to eq "first"
      expect(returned_json["user"]["last_name"]).to eq "last"
      expect(returned_json["user"]["username"]).to eq "username"
      expect(returned_json["user"]["email"]).to eq "123@gmail.com"
    end

    it "should return a json of a review that has details about its celestial" do
      returned_json = JSON.parse(response.body)["reviews"][0]
      expect(returned_json["celestial"]["name"]).to eq "Planet1"
      expect(returned_json["celestial"]["distance"]).to eq 1
      expect(returned_json["celestial"]["celestial_type"]).to eq "planet"
      expect(returned_json["celestial"]["size"]).to eq 2
    end
  end
end
