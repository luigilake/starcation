class Api::V1::ReviewsController < ApplicationController
  def new
  end

  def create
    review_params
    binding.pry
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :user_id)
  end
end
