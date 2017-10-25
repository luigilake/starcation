require 'spec_helper'

feature "edit" do

  xscenario 'specifying valid and required information' do
    visit new_user_session_path
    click_link 'Sign up'
    fill_in 'Username', with: 'testname'
    fill_in 'First name', with: 'Jon'
    fill_in 'Last name', with: 'Smith'
    fill_in 'Email', with: '123@gmail.com'
    fill_in 'Password', with: '1234567'
    fill_in 'Password confirmation', with: '1234567'
    click_button 'Sign up'

    visit edit_user_registration_path
    fill_in 'Username', with: 'testname'
    fill_in 'First name', with: 'Jon'
    fill_in 'Last name', with: 'Smith'
    fill_in 'Email', with: '123@gmail.com'
    fill_in 'Password', with: '1234567'
    fill_in 'Password confirmation', with: '1234567'
    fill_in 'Current password', with: '1234567'
    click_button 'Update'
    expect(page).to have_content("Your account has been updated successfully.")
  end

  xscenario 'specifying blank information' do
  visit new_user_session_path
  click_link 'Sign up'
  fill_in 'Username', with: 'testname'
  fill_in 'First name', with: 'Jon'
  fill_in 'Last name', with: 'Smith'
  fill_in 'Email', with: '123@gmail.com'
  fill_in 'Password', with: '1234567'
  fill_in 'Password confirmation', with: '1234567'
  click_button 'Sign up'
  visit edit_user_registration_path
  fill_in 'Username', with: ''
  fill_in 'First name', with: ''
  fill_in 'Last name', with: ''
  fill_in 'Email', with: ''
  fill_in 'Password', with: ''
  fill_in 'Password confirmation', with: ''
  fill_in 'Current password', with: '09887652'
  click_button 'Update'
  expect(page).to have_content("First name can't be blank")
  expect(page).to have_content("Last name can't be blank")
  expect(page).to have_content("Username can't be blank")
  expect(page).to have_content("Email can't be blank")
  expect(page).to have_content("Current password is invalid")
  end
end
