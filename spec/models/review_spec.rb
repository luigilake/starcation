require "spec_helper"

describe Review do
  it { should belong_to :user }
  it { should belong_to :celestial }

  it { should have_valid(:body).when('hahahahahaha') }
  it { should_not have_valid(:body).when(nil, '') }

  it { should have_valid(:rating).when(5)}
  it { should_not have_valid(:rating).when(nil, '')}
  it { should_not have_valid(:rating).when(20)}
end
