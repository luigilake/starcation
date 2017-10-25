require 'rails_helper'

RSpec.describe Vote, type: :model do
  context "user votes on a review" do
    it { should have_valid(:user_id).when(1) }
    it { should have_valid(:review_id).when(1) }
    it { should have_valid(:value).when(4) }
    it { should_not have_valid(:value).when('hello') }
  end
end
