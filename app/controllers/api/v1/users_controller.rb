class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user
      render json: { signed_in: true, current_user: current_user }
    else
      render json: { signed_in: false }
    end
  end

end
