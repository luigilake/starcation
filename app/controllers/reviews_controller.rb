class ReviewsController < ApplicationController
  def destroy
    @review = Review.find(params[:review_id])
    @celestial = Celestial.find(params[:celestial_id])
    @review.destroy
    redirect_to @celestial
  end
end
