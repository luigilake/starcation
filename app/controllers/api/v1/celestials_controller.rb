class Api::V1::CelestialsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Celestial.all
  end

  def show
    @id = params[:id]
    celestial = Celestial.find(@id)
    reviews = celestial.reviews
    review_info = reviews.map do |review|
      votes_joins = Vote.where(review_id: (review.id))
      sum_of_votes = 0
      if votes_joins
        votes_joins.each do |value|
          if value.value
            sum_of_votes += value.value
          end
        end
      end
       {
          id: review.id,
          body: review.body,
          rating: review.rating,
          votes: sum_of_votes,
          photo: review.photo,
          user: review.user,
          celestial: review.celestial,
          created_at: review.created_at,
          updated_at: review.updated_at,
          current_user_votes: Vote.where(user_id: current_user.id, review_id: review.id)
        }
    end
    render json: {celestial: celestial, current_user: current_user, reviews: review_info}
  end
end
