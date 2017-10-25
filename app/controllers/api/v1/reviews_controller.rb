class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!


  def create
    celestial = Celestial.find(params["review"]["celestial_id"])
    review = Review.new
    review.body = params["review"]["body"]
    review.rating = params["review"]["rating"]
    review.celestial = celestial
    review.user = current_user
    review.save
    review_object = {
      id: review.id,
      body: review.body,
      votes: 0,
      rating: review.rating,
      celestial: celestial,
      user: current_user,
      created_at: review.created_at,
      updated_at: review.updated_at,
      current_user_votes: []
    }

    render json: review_object
  end

  def update
    user_id = current_user.id

    @new_vote = Vote.new
    @new_vote.review_id = params["review_id"]
    @new_vote.value = params["vote_value"]
    @new_vote.user_id = current_user.id

    if !@new_vote.save
      previous_vote = Vote.where(review_id: params["review_id"], user_id: current_user.id)
      previous_vote_value = previous_vote[0].value

      if previous_vote_value == 0
        previous_vote_value = params['vote_value']
      elsif params['vote_value'] == -1
        if previous_vote_value == -1
          previous_vote_value = 0
        else
          previous_vote_value = -1
        end
      elsif params['vote_value'] == 1
        if previous_vote_value == 1
          previous_vote_value = 0
        else
          previous_vote_value = 1
        end
      end

      previous_vote.update_all(value: previous_vote_value)
    end
  end

  def destroy
    review_id = params[:id]
    celestial_id = params[:celestial_id]

    review_to_delete = Review.find_by(id: review_id, celestial_id: celestial_id)
    review_to_delete.delete

    reviews_to_render = Review.where(celestial_id: celestial_id)

    render json: reviews_to_render

  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :celestial_id, :user_id)
  end

end
