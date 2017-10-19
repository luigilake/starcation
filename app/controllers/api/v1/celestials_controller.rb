class Api::V1::CelestialsController < ApplicationController
  def index
    render json: Celestial.all
  end

  def show
    @id = params[:id]
    celestial = Celestial.find(@id)
    reviews = celestial.reviews
    render json: {celestial: celestial, reviews: reviews}
  end
end
