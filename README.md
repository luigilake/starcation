# README

# STARCATION

Starcation is an intergalactic travel review website, where starcationers or intergalactic business-aliens alike can share their thoughts on their favorite (or most hated) celestial bodies.

---

## Contributors
* [Luigi Lake](https://github.com/luigilake)
* [Nate Weeks](https://github.com/Nate-weeks)
* [Joe Musacchia](https://github.com/joemusacchia)
* [Randy Morantes](https://github.com/rmorantes)

![Build Status](https://codeship.com/projects/c9cd1530-94c4-0135-ea79-5e19c06be32c/status?branch=master)
[![Code Climate](https://api.codeclimate.com/v1/badges/8a2421d69aa747e023f7/maintainability)](https://codeclimate.com/github/luigilake/starcation/maintainability)
![Coverage Status](https://coveralls.io/repos/luigilake/starcation/badge.png)

## Features

 * Users can create and update their own personal account.
 * Users can sign in/out of their account
 * Users can optionally add a profile picture to their account.
 * Users can view a list of celestial bodies on the root page
 * Users can filter the list of celestial bodies by type or through a search
 * Users can create a celestial body.
 * Users can optionally add an image when creating a celestial body.
 * Users can edit celestial bodies they created.
 * Users can view details about a celestial body along with reviews associated with that celestial body.
 * Users can add reviews to a celestial body, if signed in.
 * Admins can delete any review, celestial body, or user.

## Technologies

 * Backend: Rails 5.1.2
 * Frontend: React.js and Embedded Ruby
 * User Auth: Devise
 * Image Hosting: Amazon Web Services
 * Styling: Foundation
 * Database: Postgres
 * Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run this app on your local machine

 * Install Ruby.2.3.3
 * In a terminal, run `git clone https://github.com/luigilake/starcation.git`
 * Navigate to the project's root directory with `cd starcation`
 * Run `bundle install && npm install && rake db:setup`
 * In terminal, run `rails s`
 * In another terminal window, run `./bin/webpacker-dev-server`
 * Visit `http://localhost:3000/` in your browser.


 ## Resources

 * [A scalable star rating widget using CSS](http://code.stephenmorley.org/html-and-css/star-rating-widget/)
