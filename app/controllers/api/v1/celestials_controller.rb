class Api::V1::CelestialsController < ApplicationController
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
    render json: {celestial: celestial, reviews: review_info}
  end
end
