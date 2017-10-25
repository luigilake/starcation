class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user
      render json: { signed_in: true, current_user: current_user }
    else
      render json: { signed_in: false }
    end
  end

  def show
    render json: User.all
  end

  def destroy
    user_id = params[:id]

    user_to_delete = User.find_by(id: user_id)
    user_to_delete.delete
    render json: User.all
  end

end
