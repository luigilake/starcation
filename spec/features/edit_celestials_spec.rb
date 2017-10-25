require 'spec_helper'

feature "edit celestials" do

  scenario 'form shows current information, specify a valid change' do

  # visit new_user_session_path
  # click_link 'Sign up'
  # fill_in 'Username', with: 'testname'
  # fill_in 'First name', with: 'Jon'
  # fill_in 'Last name', with: 'Smith'
  # fill_in 'Email', with: '123@gmail.com'
  # fill_in 'Password', with: '1234567'
  # fill_in 'Password confirmation', with: '1234567'
  # click_button 'Sign up'
  #
  # visit new_celestial_path
  # fill_in 'Name', with: 'Mars'
  # fill_in 'Distance', with: '50'
  # select 'Planet', from: 'Celestial type'
  # fill_in 'Size', with: '100'
  # click_button 'Add Celestial'
  #
  # click_link 'Mars'
  # expect(page).to have_content("Mars")
  # expect(page).to have_content("50")
  # expect(page).to have_content("Planet")
  # expect(page).to have_content("100")

  let(:user) { User.create() }
  let(:planet) { Celestial.create(attribute1: something, user: user) }
  sign_in(user)

  visit edit_celestial_path(planet)
  fill_in ''
  end

end
