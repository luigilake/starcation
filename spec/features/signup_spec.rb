require 'spec_helper'


feature "sign up" do

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

    expect(page).to have_content("Welcome! You have signed up successfully.")
    expect(current_path).to eq '/'
  end

  scenario 'specifying blank information' do
    visit new_user_session_path
    click_link 'Sign up'
    fill_in 'Username', with: ''
    fill_in 'First name', with: ''
    fill_in 'Last name', with: ''
    fill_in 'Email', with: ''
    fill_in 'Password', with: ''
    fill_in 'Password confirmation', with: ''
    click_button 'Sign up'
    expect(page).to have_content("First name can't be blank")
    expect(page).to have_content("Last name can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Password can't be blank")

  end

  scenario 'specifying non-matching passwords' do
    visit new_user_session_path
    click_link 'Sign up'
    fill_in 'Username', with: ''
    fill_in 'First name', with: ''
    fill_in 'Last name', with: ''
    fill_in 'Email', with: ''
    fill_in 'Password', with: '1234567'
    fill_in 'Password confirmation', with: '8765432'
    click_button 'Sign up'
    expect(page).to have_content("Password confirmation doesn't match Password")
  end
end
