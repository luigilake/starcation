class CelestialsController < ApplicationController
  def new
    @celestial = Celestial.new

  end

  def create
    @celestial = Celestial.new(celestial_params)

    @celestial.user_id = current_user.id

    if @celestial.save
      flash[:notice] = 'Celestial saved successfully'
      redirect_to root_path
    else
      @form_errors = @celestial.errors.full_messages
      render :new
    end
  end

  private

  def celestial_params
    params.require(:celestial).permit(:name, :distance, :celestial_type, :size)
  end
end
