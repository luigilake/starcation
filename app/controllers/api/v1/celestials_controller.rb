class Api::V1::CelestialsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Celestial.all
  end

  def show
    @id = params[:id]
    celestial = Celestial.find(@id)
    reviews = celestial.reviews
    review_info = reviews.map do |review|
       {
          creator: review.user.username,
          content: review
        }
    end
    signed_in = false
    if current_user
      signed_in = true
    end
    render json: {celestial: celestial, stat: signed_in, reviews: review_info}
  end
end
