require "rails_helper"

RSpec.describe Api::V1::CelestialsController, type: :controller do
  let!(:user) {User.create(first_name: "first", last_name: "last", username: "username", email: "123@gmail.com", password: "1234567", password_confirmation: "1234567")}
  let!(:planet1) {Celestial.create(name: "Planet1", distance: 1, celestial_type: "planet", size: 2, user: user)}

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
      expect(returned_json["name"]).to eq "Planet1"
      expect(returned_json["distance"]).to eq 1
      expect(returned_json["celestial_type"]).to eq "planet"
      expect(returned_json["size"]).to eq 2
    end
  end
end
