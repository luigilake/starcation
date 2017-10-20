class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }

  def new
  end

  def create
    celestial = Celestial.find(params["review"]["celestial_id"])
    review = Review.new
    review.body = params["review"]["body"]
    review.rating = params["review"]["rating"]
    review.celestial = celestial
    review.user = current_user
    review.save
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :celestial_id, :user_id)
  end
end
