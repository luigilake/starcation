class Api::V1::CelestialsController < ApplicationController
  def index
    render json: Celestial.all
  end

  def show
    @id = params[:id]
    render json: Celestial.find(@id)
  end
end
