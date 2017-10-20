class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }

  def new
  end

  def create
    review = Review.new
    review.body = params["review"]["body"]
    review.rating = params["review"]["rating"]
    review.celestial_id = params["celestial_id"]
    review.user = current_user
    review.save

  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
