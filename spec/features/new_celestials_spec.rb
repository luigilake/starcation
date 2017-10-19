require 'spec_helper'

feature 'add new celestial' do

  scenario 'specifying valid and required information' do
    visit new_user_session_path
    click_link 'Sign up'
    fill_in 'Username', with: 'testname'
    fill_in 'First name', with: 'Jon'
    fill_in 'Last name', with: 'Smith'
    fill_in 'Email', with: '123@gmail.com'
    fill_in 'Password', with: '1234567'
    fill_in 'Password confirmation', with: '1234567'
    click_button 'Sign up'

    visit new_celestial_path
    fill_in 'Name', with: 'Mars'
    fill_in 'Distance', with: '50'
    select 'Planet', from: 'Celestial type'
    fill_in 'Size', with: '100'
    click_button 'Add Celestial'

    expect(page).to have_content("Celestial saved successfully")
    expect(current_path).to eq '/'

  end

  # scenario '' do
  #
  # end
  #
  # scenario '' do
  #
  # end
end
