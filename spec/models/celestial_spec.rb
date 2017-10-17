require "spec_helper"

describe Celestial do
  it { should belong_to :user }

  it { should have_valid(:name).when('Andromeda') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:photo).when("example.img.com")}
  it { should have_valid(:photo).when(nil, '')}

  it { should have_valid(:distance).when(3)}
  it { should_not have_valid(:distance).when(nil, '')}

  it { should have_valid(:celestial_type).when('galaxy')}
  it { should_not have_valid(:celestial_type).when(nil, '')}
  it { should_not have_valid(:celestial_type).when('tree')}

  it { should have_valid(:size).when(4)}
  it { should_not have_valid(:size).when(nil, '')}

  it { should have_valid(:user_id).when(1)}
  it { should_not have_valid(:user_id).when(nil, '')}
end
